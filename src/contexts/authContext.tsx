import React, { useEffect, useState, useCallback, FC } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createContext } from 'use-context-selector';

import { fastFeetApi } from '../services/fastFeetApi';

interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
}

interface IAuthContext {
  login(cpf: string, password: string, rememberMe: boolean): Promise<void>;
  logout(): Promise<void>;
  user: IUser;
  loading: boolean;
}

interface IData {
  token: string;
  user: IUser;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider: FC = ({ children }) => {
  const [data, setData] = useState<IData>({} as IData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkLoggedUser() {
      const findUserLogged = await AsyncStorage.getItem(
        '@FastFeetDeliveryMenApp:AuthData',
      );

      if (findUserLogged) {
        const parsedStoragedData = JSON.parse(findUserLogged) as IData;

        try {
          await fastFeetApi.post('/sessions/verify', {
            token: parsedStoragedData.token,
          });

          setData(parsedStoragedData);

          fastFeetApi.defaults.headers.authorization = `Beaer ${parsedStoragedData.token}`;
        } catch {
          setData({} as IData);
        } finally {
          setLoading(false);
        }

        return;
      }

      setData({} as IData);
      setLoading(false);
    }

    const timer = setTimeout(() => {
      checkLoggedUser();
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const login = useCallback(
    async (cpf: string, password: string, rememberMe: boolean) => {
      const { data: dataFromApi } = await fastFeetApi.post<IData>(
        '/sessions/user',
        {
          cpf,
          password,
        },
      );

      fastFeetApi.defaults.headers.authorization = `Bearer ${dataFromApi.token}`;

      setData(dataFromApi);

      if (rememberMe) {
        const dataToBeStoraged = JSON.stringify({
          token: dataFromApi.token,
          user: {
            id: dataFromApi.user.id,
            name: dataFromApi.user.name,
            cpf: dataFromApi.user.cpf,
            email: dataFromApi.user.email,
          },
        });

        await AsyncStorage.mergeItem(
          '@FastFeetDeliveryMenApp:AuthData',
          dataToBeStoraged,
        );
      }
    },
    [],
  );

  const logout = useCallback(async () => {
    await AsyncStorage.removeItem('@FastFeetDeliveryMenApp:AuthData');

    setData({} as IData);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, user: data.user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

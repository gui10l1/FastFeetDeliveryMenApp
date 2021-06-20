import { useContextSelector } from 'use-context-selector';
import { AuthContext } from '../contexts/authContext';

interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
}

interface IUseAuth {
  user: IUser;
  login(cpf: string, password: string): Promise<void>;
  logout(): Promise<void>;
  loading: boolean;
}

export function useAuth(): IUseAuth {
  const authUser = useContextSelector(
    AuthContext,
    authContext => authContext.user,
  );
  const login = useContextSelector(
    AuthContext,
    authContext => authContext.login,
  );
  const logout = useContextSelector(
    AuthContext,
    authContext => authContext.logout,
  );
  const loading = useContextSelector(
    AuthContext,
    authContext => authContext.loading,
  );

  return {
    user: authUser,
    login,
    logout,
    loading,
  };
}

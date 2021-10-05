import React, { FC } from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';

import { useAuth } from '../../../hooks/useAuth';
import {
  Container,
  WelcomeAndLogOff,
  Welcome,
  Location,
  LocationTitle,
  LocationIconAndText,
  State,
} from './styles';

const Header: FC = () => {
  const { user, logout } = useAuth();

  return (
    <Container>
      <WelcomeAndLogOff>
        <Welcome>
          Bem-vindo,&nbsp;
          {user.name.split(' ')[0]}
        </Welcome>

        <FeatherIcons
          name="log-out"
          size={25}
          color="#FFC042"
          onPress={logout}
        />
      </WelcomeAndLogOff>

      <Location>
        <LocationTitle>Entregas</LocationTitle>

        <LocationIconAndText>
          <FeatherIcons name="map-pin" size={22} color="#FFC042" />

          <State>Rio do sul</State>
        </LocationIconAndText>
      </Location>
    </Container>
  );
};

export { Header };

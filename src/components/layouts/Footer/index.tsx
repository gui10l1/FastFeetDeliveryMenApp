import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback } from 'react';

import { Container, Menu, MenuText } from './styles';

interface IFooter {
  activeMenu: 'pending' | 'done' | 'requests';
}

const Footer: FC<IFooter> = ({ activeMenu }) => {
  const { navigate } = useNavigation();

  const handleNavigateToHomeScreen = useCallback(() => {
    navigate('HomeScreen');
  }, [navigate]);

  const handleNavigateToFinishedDeliveriesScreen = useCallback(() => {
    navigate('FinishedDeliveriesScreen');
  }, [navigate]);

  const handleNavigateToRequestsScreen = useCallback(() => {
    navigate('RequestsScreen');
  }, [navigate]);

  return (
    <Container>
      <Menu
        active={activeMenu === 'pending'}
        onPress={handleNavigateToHomeScreen}
      >
        <MenuText active={activeMenu === 'pending'}>Pendentes</MenuText>
      </Menu>

      <Menu
        active={activeMenu === 'done'}
        onPress={handleNavigateToFinishedDeliveriesScreen}
      >
        <MenuText active={activeMenu === 'done'}>Feitas</MenuText>
      </Menu>

      <Menu
        active={activeMenu === 'requests'}
        onPress={handleNavigateToRequestsScreen}
      >
        <MenuText active={activeMenu === 'requests'}>Pedidos</MenuText>
      </Menu>
    </Container>
  );
};

export { Footer };

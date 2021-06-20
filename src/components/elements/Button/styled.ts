import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;

  margin-top: 20px;

  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-Medium';
  font-size: 16px;
`;

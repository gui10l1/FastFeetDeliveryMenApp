import styled from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  height: 56px;

  width: 100%;

  background: #f7f5fa;

  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-radius: 4px;

  align-items: center;
  flex-direction: row;

  padding: 0 20px;
`;

export const Icon = styled(FeatherIcons)`
  padding-right: 20px;
  margin-right: 16px;

  border-style: solid;
  border-right-color: #dad7e0;
  border-right-width: 2px;

  color: #ccc;
`;

export const StyledInput = styled.TextInput`
  flex: 1;

  font-family: 'Inter-Regular';
  font-size: 16px;
`;

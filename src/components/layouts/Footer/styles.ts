import styled, { css } from 'styled-components/native';

interface IMenu {
  active: boolean;
}

const menuWidth = 100 / 3;

export const Container = styled.View`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 70px;

  flex-direction: row;

  background-color: #f7f5fa;
`;

export const Menu = styled.TouchableOpacity<IMenu>`
  background-color: #f7f5fa;

  width: ${menuWidth}%;

  align-items: center;
  justify-content: center;

  ${props =>
    props.active &&
    css`
      background-color: #fff;
      border-top-color: #ffc042;
      border-color: transparent;
      border-style: solid;
      border-width: 2px;
    `}
`;

export const MenuText = styled.Text<IMenu>`
  color: #6f6c80;
  font-size: 15px;
  font-family: 'Inter-Medium';

  ${props =>
    props.active &&
    css`
      color: #4c33cc;
    `}
`;

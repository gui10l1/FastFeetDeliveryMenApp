import React, { FC } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styled';

interface IButton extends RectButtonProps {
  backgroundColor: string;
  textColor: string;
}

const Button: FC<IButton> = ({
  children,
  backgroundColor,
  textColor,
  ...rest
}) => {
  return (
    <Container style={{ backgroundColor }} {...rest}>
      <ButtonText style={{ color: textColor }}>{children}</ButtonText>
    </Container>
  );
};

export { Button };

import React, { FC, useCallback, useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Platform, ScrollView } from 'react-native';
import { ValidationError } from 'yup';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  FastFeetBrand,
  FastFeetLogo,
  Content,
  Title,
  YellowText,
  Subtitle,
  RememberMe,
  CheckboxContainer,
  CheckboxLabel,
  ForgotPassword,
} from './styles';
import fastFeetBrand from '../../assets/img/fastFeetBrand.png';
import fastFeetLogo from '../../assets/img/fastFeetLogo.png';
import { Input } from '../../components/elements/Form/Input';
import { Button } from '../../components/elements/Button';
import { useAuth } from '../../hooks/useAuth';
import { loginFormValidation } from './validations';
import { getValidationErrors } from '../../utils/getValidationErrors';

const Login: FC = () => {
  const checkboxRef = useRef<BouncyCheckbox>(null);
  const loginFormRef = useRef<FormHandles>(null);
  const { login } = useAuth();
  const { navigate } = useNavigation();

  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = useCallback(
    async data => {
      try {
        await loginFormValidation(data);

        const { cpf, password } = data;

        await login(cpf, password, isChecked);

        navigate('HomeScreen');
      } catch (err) {
        if (err instanceof ValidationError) {
          const errors = getValidationErrors(err);

          loginFormRef.current?.setErrors(errors);
        }
      }
    },
    [login, navigate, isChecked],
  );

  const handleCheckboxPress = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Header>
          <FastFeetBrand source={fastFeetBrand} />

          <FastFeetLogo source={fastFeetLogo} />
        </Header>

        <Content>
          <Title>
            <YellowText>Entregador,</YellowText> você é nosso maior valor
          </Title>

          <Subtitle>Faça seu login para começar suas entregas.</Subtitle>

          <Form onSubmit={handleLogin} ref={loginFormRef}>
            <Input name="cpf" icon="user" placeholder="Insira seu CPF" />

            <Input name="password" icon="lock" placeholder="Insira sua senha" />

            <RememberMe>
              <CheckboxContainer>
                <BouncyCheckbox
                  ref={checkboxRef}
                  isChecked={isChecked}
                  onPress={handleCheckboxPress}
                  size={25}
                />

                <CheckboxLabel onPress={() => checkboxRef.current?.onPress()}>
                  Lembrar-me
                </CheckboxLabel>
              </CheckboxContainer>

              <ForgotPassword>Esqueci minha senha</ForgotPassword>
            </RememberMe>

            <Button
              backgroundColor="#FFC042"
              textColor="#4C4766"
              onPress={() => loginFormRef.current?.submitForm()}
            >
              Entrar
            </Button>
          </Form>
        </Content>
      </ScrollView>
    </Container>
  );
};

export { Login };

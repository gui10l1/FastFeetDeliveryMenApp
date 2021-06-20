import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;

  padding: 30px;

  margin-top: 30px;
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const FastFeetBrand = styled.Image`
  height: 44px;
  width: 40px;
`;

export const FastFeetLogo = styled.Image``;

export const Content = styled.View`
  margin-top: 85px;
`;

export const Title = styled.Text`
  font-family: 'RobotoCondensed-Bold';
  font-size: 48px;

  margin-bottom: 16px;

  color: #fff;
`;

export const YellowText = styled.Text`
  color: #ffc042;

  font-family: 'RobotoCondensed-Bold';
  font-size: 48px;
`;

export const Subtitle = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;

  margin-bottom: 64px;

  max-width: 180px;

  color: #d5ccff;

  line-height: 25px;
`;

export const RememberMe = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const CheckboxLabel = styled.Text`
  color: #d5ccff;
  font-family: 'Inter-Regular';
`;

export const ForgotPassword = styled.Text`
  color: #d5ccff;
`;

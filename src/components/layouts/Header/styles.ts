import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px 24px;
`;

export const WelcomeAndLogOff = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
`;

export const Welcome = styled.Text`
  color: #d4ccff;

  font-family: 'Inter-Regular';
  font-size: 15px;
`;

export const Location = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 28px;
`;

export const LocationTitle = styled.Text`
  font-family: 'RobotoCondensed-Bold';
  font-size: 32px;
  color: #fff;
`;

export const LocationIconAndText = styled.View`
  flex-direction: row;
`;

export const State = styled.Text`
  margin-left: 13px;

  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #d4ccff;
`;

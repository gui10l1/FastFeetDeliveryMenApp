import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;

  margin-top: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 22px 24px;
  padding-bottom: 48px;
`;

export const HeaderText = styled.Text`
  color: #fff;

  font-size: 26px;
  font-family: 'RobotoCondensed-Bold';
`;

export const Content = styled.View`
  background-color: #f7f5fa;

  flex: 1;
`;

export const DataContainer = styled.View`
  max-width: 327px;
  width: 100%;

  margin: 0 auto;

  background-color: #fff;

  border-radius: 4px;

  padding: 16px 24px;

  margin-top: -24px;
  margin-bottom: 16px;
`;

export const DataHeader = styled.View`
  margin-bottom: 32px;

  flex-direction: row;
  align-items: center;
`;

export const DataImage = styled.Image`
  width: 18px;
  height: 20px;
`;

export const DataHeaderText = styled.Text`
  font-size: 22px;
  font-family: 'RobotoCondensed-Bold';

  color: #4c4766;

  margin-left: 15px;
`;

export const DataContent = styled.View``;

export const DataTextTitle = styled.Text`
  color: #4c4766;

  font-size: 12px;
  font-family: 'Inter-Bold';

  text-transform: uppercase;

  margin-bottom: 6px;
`;

export const DataTextParagraph = styled.Text`
  margin-bottom: 24px;

  color: #6f6c80;

  font-size: 15px;
  font-family: 'Inter-Regular';

  max-width: 210px;

  line-height: 25px;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 50px;
  margin-bottom: 70px;

  flex: 1;
`;

export const Content = styled.View`
  flex: 1;

  padding: 0 24px;

  background-color: #f7f5fa;
`;

export const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;

  max-width: 327px;
  width: 100%;

  height: 56px;

  background-color: #fff;

  border-style: solid;
  border-width: 1px;
  border-color: rgba(21, 6, 51, 0.08);
  border-radius: 4px;

  padding: 0 20px;

  margin-top: -28px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;

  height: 100%;
  width: 100%;

  font-size: 16px;
  font-family: 'Inter-Regular';
`;

export const DeliveriesCount = styled.View`
  margin-top: 31px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;

  width: 100%;
`;

export const Line = styled.View`
  border-style: solid;
  border-width: 1px;
  border-color: #dad7e0;

  flex: 1;

  height: 1px;
`;

export const Count = styled.Text`
  font-size: 15px;
  font-family: 'Inter-Medium';
  color: #bebccc;

  margin: 0 23px;
`;

export const DeliveriesList = styled.ScrollView``;

export const LoaderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

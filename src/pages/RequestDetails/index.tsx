import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback } from 'react';
import { Text } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import dataIcon from '../../assets/img/dataIcon.png';
import {
  Container,
  Header,
  HeaderText,
  Content,
  DataContainer,
  DataHeader,
  DataImage,
  DataHeaderText,
  DataContent,
  DataTextTitle,
  DataTextParagraph,
} from './styles';

export const RequestDetails: FC = () => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <FeatherIcons
          name="arrow-left"
          size={20}
          color="#fff"
          onPress={handleGoBack}
        />

        <HeaderText>Detalhes do pedido</HeaderText>

        <Text />
      </Header>

      <Content>
        <DataContainer>
          <DataHeader>
            <DataImage source={dataIcon} />
            <DataHeaderText>Dados</DataHeaderText>
          </DataHeader>

          <DataContent>
            <DataTextTitle>Destinatário</DataTextTitle>

            <DataTextParagraph>Diego Fernandes</DataTextParagraph>

            <DataTextTitle>Endereço</DataTextTitle>

            <DataTextParagraph>
              Rua Guilherme Gemballa, 260 Jardim América, SC 89 168-000
            </DataTextParagraph>
          </DataContent>
        </DataContainer>

        <DataContainer style={{ marginTop: 0 }}>
          <DataHeader>
            <DataImage source={dataIcon} />
            <DataHeaderText>Dados</DataHeaderText>
          </DataHeader>

          <DataContent>
            <DataTextTitle>Destinatário</DataTextTitle>

            <DataTextParagraph>Diego Fernandes</DataTextParagraph>

            <DataTextTitle>Endereço</DataTextTitle>

            <DataTextParagraph>
              Rua Guilherme Gemballa, 260 Jardim América, SC 89 168-000
            </DataTextParagraph>
          </DataContent>
        </DataContainer>

        <DataContainer style={{ marginTop: 0 }}>
          <DataHeader>
            <DataImage source={dataIcon} />
            <DataHeaderText>Dados</DataHeaderText>
          </DataHeader>

          <DataContent>
            <DataTextTitle>Destinatário</DataTextTitle>

            <DataTextParagraph>Diego Fernandes</DataTextParagraph>

            <DataTextTitle>Endereço</DataTextTitle>

            <DataTextParagraph>
              Rua Guilherme Gemballa, 260 Jardim América, SC 89 168-000
            </DataTextParagraph>
          </DataContent>
        </DataContainer>
      </Content>
    </Container>
  );
};

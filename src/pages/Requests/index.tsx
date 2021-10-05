import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import packageIcon from '../../assets/img/package.png';
import { Footer } from '../../components/layouts/Footer';
import { Header } from '../../components/layouts/Header';
import { fastFeetApi } from '../../services/fastFeetApi';
import { IRequest, ILoadedRequest } from './interfaces';
import {
  Container,
  Content,
  SearchInputContainer,
  SearchInput,
  DeliveriesCount,
  Line,
  Count,
  DeliveriesList,
  LoaderContainer,
  Request,
  RequestHeader,
  RequestInfo,
  RequestAddress,
  RequestIcon,
  RequestNameContainer,
  RequestName,
  RequestedAt,
  RequestDetailsButton,
  RequestDatailsButtonText,
} from './styles';

export const Requests: FC = () => {
  const { navigate } = useNavigation();

  const [deliveries, setDeliveries] = useState<IRequest[]>();

  useEffect(() => {
    async function loadRequests() {
      const { data } = await fastFeetApi.get<ILoadedRequest[]>('/deliveries');

      const parsedData = data.map(item => ({
        id: item.id,
        address: item.address,
        city: item.city,
        neighborhood: item.neighborhood,
        postalCode: item.postal_code,
        state: item.state,
      }));

      setDeliveries(parsedData);
    }

    const timer = setTimeout(() => loadRequests(), 1500);

    return () => clearInterval(timer);
  }, []);

  const handleNavigationToRequestDetailsScreen = useCallback(() => {
    navigate('RequestDetailsScreen');
  }, [navigate]);

  return (
    <>
      <Container>
        <Header />

        <Content>
          <SearchInputContainer>
            <SearchInput placeholder="Filtrar por bairro" />
            <FeatherIcons name="search" size={22} color="#BEBCCC" />
          </SearchInputContainer>

          <DeliveriesCount>
            <Line />
            {!deliveries && <Count>0 solicitações</Count>}
            {deliveries && <Count>{deliveries.length} solicitações</Count>}
            <Line />
          </DeliveriesCount>

          {!deliveries && (
            <LoaderContainer>
              <ActivityIndicator color="#4C33CC" size={60} />
            </LoaderContainer>
          )}

          {deliveries && (
            <DeliveriesList>
              <Request>
                <RequestHeader>
                  <RequestNameContainer>
                    <RequestIcon source={packageIcon} />

                    <RequestName>Nome do pacote</RequestName>
                  </RequestNameContainer>

                  <RequestedAt>10/07/2003</RequestedAt>
                </RequestHeader>

                <RequestInfo>
                  <RequestAddress>
                    QR 212 conjunto 11 lote 01, APTO 608
                  </RequestAddress>
                </RequestInfo>

                <RequestDetailsButton
                  onPress={handleNavigationToRequestDetailsScreen}
                >
                  <RequestDatailsButtonText>
                    Detalhes -{'>'}
                  </RequestDatailsButtonText>
                </RequestDetailsButton>
              </Request>
            </DeliveriesList>
          )}
        </Content>
      </Container>
      <Footer activeMenu="requests" />
    </>
  );
};

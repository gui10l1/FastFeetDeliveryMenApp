import { format } from 'date-fns';
import React, { FC, useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import { Footer } from '../../components/layouts/Footer';
import { Header } from '../../components/layouts/Header';
import { PackageDelivered } from '../../components/layouts/Packages/Delivered';
import { PackageWaiting } from '../../components/layouts/Packages/Waiting';
import { PackageWithdrawn } from '../../components/layouts/Packages/Withdrawn';
import { fastFeetApi } from '../../services/fastFeetApi';
import { IDelivery, ILoadedDelivery } from './interfaces';
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
} from './styles';

const DeliveriesFinished: FC = () => {
  const [deliveries, setDeliveries] = useState<IDelivery[]>();

  useEffect(() => {
    async function loadDeliveries() {
      const { data } = await fastFeetApi.get<ILoadedDelivery[]>(
        '/delivery-men/me/finished-deliveries',
        {
          params: {
            relations: ['product'],
          },
        },
      );

      const parsedData = data.map(item => {
        return {
          id: item.id,
          endDate: item.end_date,
          startDate: item.start_date,
          product: item.product,
        };
      });

      setDeliveries(parsedData);
    }

    const timer = setTimeout(() => {
      loadDeliveries();
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
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
              {!deliveries ? (
                <Count>0 entregas</Count>
              ) : (
                <Count>{deliveries.length} entregas</Count>
              )}
              <Line />
            </DeliveriesCount>

            {!deliveries ? (
              <LoaderContainer>
                <ActivityIndicator color="#4C33CC" size={60} />
              </LoaderContainer>
            ) : (
              <DeliveriesList>
                {deliveries.map(delivery => {
                  if (delivery.endDate !== null) {
                    return (
                      <PackageDelivered
                        key={delivery.id}
                        packageName={delivery.product.name}
                        packageRequestedAt={format(
                          new Date(delivery.startDate),
                          'dd/MM/yyyy',
                        )}
                      />
                    );
                  }

                  if (delivery.startDate) {
                    return (
                      <PackageWithdrawn
                        key={delivery.id}
                        packageName={delivery.product.name}
                        packageRequestedAt={format(
                          new Date(delivery.startDate),
                          'dd/MM/yyyy',
                        )}
                      />
                    );
                  }

                  return (
                    <PackageWaiting
                      key={delivery.id}
                      packageName={delivery.product.name}
                      packageRequestedAt={format(
                        new Date(delivery.startDate),
                        'dd/MM/yyyy',
                      )}
                    />
                  );
                })}
              </DeliveriesList>
            )}
          </Content>
        </Container>
        <Footer activeMenu="done" />
      </>
    </>
  );
};

export { DeliveriesFinished };

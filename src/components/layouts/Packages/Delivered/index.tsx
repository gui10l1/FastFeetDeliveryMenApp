import React, { FC } from 'react';

import packageIcon from '../../../../assets/img/package.png';
import { IPackageDelivered } from './interfaces';
import {
  Container,
  Header,
  PackageNameContainer,
  PackageIcon,
  PackageName,
  RequestedAt,
  DeliveryStatus,
  LineStatusContainer,
  Circle,
  Dot,
  LineStatus,
  StatusAsTextContainer,
  StatusAsText,
  DeliveryDetailsButton,
  DeliveryDatailsButtonText,
} from './styles';

const PackageDelivered: FC<IPackageDelivered> = ({
  packageName,
  packageRequestedAt,
}) => {
  return (
    <Container>
      <Header>
        <PackageNameContainer>
          <PackageIcon source={packageIcon} />

          <PackageName>{packageName}</PackageName>
        </PackageNameContainer>

        <RequestedAt>{packageRequestedAt}</RequestedAt>
      </Header>

      <DeliveryStatus>
        <LineStatusContainer>
          <Circle>
            <Dot />
          </Circle>

          <LineStatus />

          <Circle>
            <Dot />
          </Circle>

          <LineStatus />

          <Circle>
            <Dot />
          </Circle>
        </LineStatusContainer>

        <StatusAsTextContainer>
          <StatusAsText>Aguardando</StatusAsText>

          <StatusAsText>Retirado</StatusAsText>

          <StatusAsText>Entregue</StatusAsText>
        </StatusAsTextContainer>
      </DeliveryStatus>

      <DeliveryDetailsButton>
        <DeliveryDatailsButtonText>Detalhes -{'>'}</DeliveryDatailsButtonText>
      </DeliveryDetailsButton>
    </Container>
  );
};

export { PackageDelivered };

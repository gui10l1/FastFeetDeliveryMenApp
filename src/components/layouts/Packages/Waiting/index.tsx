import React, { FC } from 'react';

import packageIcon from '../../../../assets/img/package.png';
import { IPackageWaiting } from './interfaces';
import {
  Container,
  Header,
  PackageNameContainer,
  PackageIcon,
  PackageName,
  RequestedAt,
  DeliveryStatus,
  LineStatusContainer,
  CircleGreen,
  DotWhite,
  CircleWithWithGrayBorders,
  LineStatus,
  StatusAsTextContainer,
  StatusAsTextGreen,
  StatusAsTextGray,
  DeliveryDetailsButton,
  DeliveryDatailsButtonText,
} from './styles';

const PackageWaiting: FC<IPackageWaiting> = ({
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
          <CircleGreen>
            <DotWhite />
          </CircleGreen>

          <LineStatus />

          <CircleWithWithGrayBorders>
            <DotWhite />
          </CircleWithWithGrayBorders>

          <LineStatus />

          <CircleWithWithGrayBorders>
            <DotWhite />
          </CircleWithWithGrayBorders>
        </LineStatusContainer>

        <StatusAsTextContainer>
          <StatusAsTextGreen>Aguardando</StatusAsTextGreen>

          <StatusAsTextGray>Retirado</StatusAsTextGray>

          <StatusAsTextGray>Entregue</StatusAsTextGray>
        </StatusAsTextContainer>
      </DeliveryStatus>

      <DeliveryDetailsButton>
        <DeliveryDatailsButtonText>Detalhes -{'>'}</DeliveryDatailsButtonText>
      </DeliveryDetailsButton>
    </Container>
  );
};

export { PackageWaiting };

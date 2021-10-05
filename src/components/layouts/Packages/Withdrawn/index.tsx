import React, { FC } from 'react';

import packageIcon from '../../../../assets/img/package.png';
import { IPackageWithdrawn } from './interfaces';
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
  CircleWhiteWithGrayBorders,
  DotWhite,
  LineStatusGreen,
  LineStatusGray,
  StatusAsTextContainer,
  StatusAsTextGreen,
  StatusAsTextGray,
  DeliveryDetailsButton,
  DeliveryDatailsButtonText,
} from './styles';

const PackageWithdrawn: FC<IPackageWithdrawn> = ({
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

          <LineStatusGreen />

          <CircleGreen>
            <DotWhite />
          </CircleGreen>

          <LineStatusGray />

          <CircleWhiteWithGrayBorders>
            <DotWhite />
          </CircleWhiteWithGrayBorders>
        </LineStatusContainer>

        <StatusAsTextContainer>
          <StatusAsTextGreen>Aguardando</StatusAsTextGreen>

          <StatusAsTextGreen>Retirado</StatusAsTextGreen>

          <StatusAsTextGray>Entregue</StatusAsTextGray>
        </StatusAsTextContainer>
      </DeliveryStatus>

      <DeliveryDetailsButton>
        <DeliveryDatailsButtonText>Detalhes -{'>'}</DeliveryDatailsButtonText>
      </DeliveryDetailsButton>
    </Container>
  );
};

export { PackageWithdrawn };

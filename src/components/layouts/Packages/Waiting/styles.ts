import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  border-style: solid;
  border-width: 1px;
  border-color: rgba(21, 6, 51, 0.08);
  border-radius: 4px;

  margin-bottom: 16px;
`;

export const Header = styled.View`
  margin-top: 24px;

  padding: 0 16px;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const PackageNameContainer = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const PackageIcon = styled.Image`
  margin-right: 14px;

  width: 24px;
  height: 24px;
`;

export const PackageName = styled.Text`
  font-size: 22px;
  font-family: 'RobotoCondensed-Bold';

  color: #4c4766;

  line-height: 24px;
`;

export const RequestedAt = styled.Text`
  font-family: 'Inter-Medium';
  font-size: 12px;

  color: #6f6c80;

  line-height: 12px;
`;

export const DeliveryStatus = styled.View`
  height: 32px;

  padding: 0 16px;

  margin-top: 32px;
  margin-bottom: 24px;
`;

export const LineStatusContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 8px;
`;

export const CircleGreen = styled.View`
  height: 14px;
  width: 14px;

  border-radius: 50px;

  background-color: #00da6d;

  align-items: center;
  justify-content: center;
`;

export const DotWhite = styled.View`
  height: 5px;
  width: 5px;

  border-radius: 50px;

  background-color: #fff;
`;

export const CircleWithWithGrayBorders = styled.View`
  height: 14px;
  width: 14px;

  border-radius: 50px;

  background-color: #fff;

  align-items: center;
  justify-content: center;

  border-style: solid;
  border-width: 2px;
  border-color: #bebccc;
`;

export const LineStatus = styled.View`
  flex: 1;

  height: 2px;

  border-style: solid;
  border-top-width: 2px;
  border-color: #bebccc;
`;

export const StatusAsTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatusAsTextGreen = styled.Text`
  font-family: 'Inter-Bold';
  color: #00da6d;

  font-size: 14px;
`;

export const StatusAsTextGray = styled.Text`
  font-family: 'Inter-Bold';
  color: #bebccc;

  font-size: 14px;
`;

export const DeliveryDetailsButton = styled.TouchableOpacity`
  width: 100%;
  height: 48px;

  align-items: center;
  flex-direction: row;

  padding: 15px 16px;

  background-color: #fff1d6;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const DeliveryDatailsButtonText = styled.Text`
  font-family: 'Inter-Medium';
  font-size: 15px;

  color: #4c4766;
`;

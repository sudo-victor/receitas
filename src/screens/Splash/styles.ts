import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.background};
`;

export const LoadWrapper = styled.View`
  position: absolute;
  bottom: 50px;

  align-items: center;
  justify-content: center;

  height: 100px;
`;

import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  padding-top: 40px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.background};
`;

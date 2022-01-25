import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.foreground};
`;

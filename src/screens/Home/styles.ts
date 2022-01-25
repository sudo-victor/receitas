import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const SeparatorCard = styled.View`
  width: 100%;
  height: 0.5px;
  margin: 5px 0;

  background-color: ${({ theme }) => theme.colors.border};
`;

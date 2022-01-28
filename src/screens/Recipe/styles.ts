import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.View`
  padding: 20px;
`;

export const RecipeType = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: 20px 0px 25px;

  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const Item = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.foreground};
`;

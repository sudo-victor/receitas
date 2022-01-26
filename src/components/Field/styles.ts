import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin: 15px 20px;
`;

export const Label = styled.Text`
  margin-bottom: 15px;

  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.foreground};
  padding: 15px;
  text-align: center;
`;

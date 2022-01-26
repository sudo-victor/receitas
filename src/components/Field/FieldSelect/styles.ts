import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  margin: 15px 20px;
`;

export const Label = styled.Text`
  margin-bottom: 15px;

  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const TypeWrapper = styled.View`
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TypeTitle = styled.Text`
  width: 85%;
  padding-left: 15px;

  font-family: ${({ theme }) => theme.fonts.primary_regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const Separator = styled.View`
  width: 1px;
  height: 30px;

  background-color: ${({ theme }) => theme.colors.border};
`;

export const IconWrapper = styled.View`
  width: 15%;
  align-items: center;
  justify-content: center;
`;

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  padding: 10px 20px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  max-width: 80%;
  margin-left: 3px;

  font-family: ${({ theme }) => theme.fonts.primary_regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const Actions = styled.View`
  width: 18%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity``;

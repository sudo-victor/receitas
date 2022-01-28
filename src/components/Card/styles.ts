import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activityOpacity: 0.9,
})`
  width: 100%;
  padding: 20px 0;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const Actions = styled.View`
  width: 30%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonWrapper = styled.TouchableOpacity`
  width: 70%;
  height: 100%;
`;

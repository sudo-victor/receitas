import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.Modal`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const List = styled.FlatList`
  padding: 20px;
`;

export const Item = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  margin: 2px 0px;
  padding: 5px 10px;

  flex-direction: row;
  align-items: center;
`;

export const ItemTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const SeparatorItem = styled.View`
  width: 100%;
  height: 0.5px;
  margin: 5px 0;

  background-color: ${({ theme }) => theme.colors.border};
`;

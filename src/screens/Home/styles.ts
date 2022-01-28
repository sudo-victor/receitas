import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const SeparatorCard = styled.View`
  width: 100%;
  height: 0.5px;
  margin: 5px 0;

  background-color: ${({ theme }) => theme.colors.border};
`;

export const Header = styled.View`
  padding: 20px;
  height: 150px;

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

export const SearchWrapper = styled.View`
  padding: 0px 20px;
  margin-top: -22.5px;
`;

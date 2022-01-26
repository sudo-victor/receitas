import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.foreground};
  text-align: center;
`;

export const Input = styled.TextInput`
  width: 85%;
  height: 100%;
  padding: 5px 15px;

  background-color: ${({ theme }) => theme.colors.input};
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.foreground};
`;

export const Separator = styled.View`
  width: 1px;
  height: 30px;

  background-color: ${({ theme }) => theme.colors.border};
`;

export const Button = styled.TouchableOpacity`
  width: 15%;
  height: 50px;

  align-items: center;
  justify-content: center;
`;

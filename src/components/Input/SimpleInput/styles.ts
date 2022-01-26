import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 5px 15px;

  background-color: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.foreground};
  text-align: center;
`;

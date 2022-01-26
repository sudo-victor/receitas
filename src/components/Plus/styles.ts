import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: absolute;
  bottom: 25px;
  right: 20px;

  height: 60px;
  width: 60px;

  align-items: center;
  justify-content: center;

  border-radius: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  elevation: 3;
`;

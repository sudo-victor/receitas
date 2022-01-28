import React from "react";
import AppLoading from "expo-app-loading";

import { Container, Title } from "./styles";
import { useTheme } from "styled-components";

export function Splash() {
  const { colors } = useTheme();

  return (
    <Container>
      <Title>Receitas</Title>

      <AppLoading />
    </Container>
  );
}

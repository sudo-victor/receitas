import React from "react";
import { StatusBar } from "expo-status-bar";

import { LoadAnimated } from "../../components/LoadAnimated";
import { Container, Title, LoadWrapper } from "./styles";

export function Splash() {
  return (
    <Container>
      <StatusBar style="light" />
      <Title>Receitas</Title>

      <LoadWrapper>
        <LoadAnimated />
      </LoadWrapper>
    </Container>
  );
}

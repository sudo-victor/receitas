import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import { LoadAnimated } from "../../components/LoadAnimated";
import { Container, Title, LoadWrapper } from "./styles";

export function Splash() {
  const { navigate } = useNavigation();

  function goToHome() {
    setTimeout(() => {
      navigate("Home");
    }, 4000);
  }

  useEffect(() => {
    goToHome();
  }, []);

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

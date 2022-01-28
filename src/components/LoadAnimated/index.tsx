import React from "react";
import LottieView from "lottie-react-native";

import load_cooking from "../../assets/load_cooking.json";

import { Container } from "./styles";

export function LoadAnimated() {
  return (
    <Container>
      <LottieView
        source={load_cooking}
        style={{ height: 100 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
}

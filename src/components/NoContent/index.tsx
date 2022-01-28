import React from "react";
import LottieView from "lottie-react-native";

import landing from "../../assets/landing.json";

import { Container, Title } from "./styles";

type Props = {
  title: string;
};

export function NoContent({ title }: Props) {
  return (
    <Container>
      {/* <Title>{title}</Title> */}

      <LottieView
        source={landing}
        style={{ height: 400 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
}

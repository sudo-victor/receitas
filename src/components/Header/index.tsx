import React from "react";
import { AntDesign as Icon } from "@expo/vector-icons";

import { Container, Title, Blank, Button } from "./styles";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  hasGoBack?: boolean;
};

export function Header({ title, hasGoBack }: Props) {
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container>
      {hasGoBack ? (
        <Button onPress={goBack}>
          <Icon name="arrowleft" color={colors.background} size={24} />
        </Button>
      ) : (
        <Blank />
      )}
      <Title>{title}</Title>
      <Blank />
    </Container>
  );
}

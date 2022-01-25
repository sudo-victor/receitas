import React from "react";
import { useTheme } from "styled-components/native";
import { Feather as Icon } from "@expo/vector-icons";

import { Container } from "./styles";

export function Plus() {
  const theme = useTheme();

  return (
    <Container>
      <Icon name="plus" size={32} color={theme.colors.complementary} />
    </Container>
  );
}

import React from "react";
import { useTheme } from "styled-components/native";
import { Feather as Icon } from "@expo/vector-icons";

import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Plus() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  function handleGoForm() {
    navigate("RecipeForm");
  }

  return (
    <Container onPress={handleGoForm}>
      <Icon name="plus" size={32} color={colors.complementary} />
    </Container>
  );
}

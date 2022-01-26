import React from "react";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Label,
  TypeWrapper,
  Button,
  TypeTitle,
  Separator,
  IconWrapper,
} from "./styles";

type Props = {
  title: string;
  placeholder: string;
  handleOpenModal: () => void;
  recipeType: string;
};

export function FieldSelect({
  title,
  placeholder,
  handleOpenModal,
  recipeType,
}: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Label>{title}</Label>
      <TypeWrapper>
        <Button onPress={handleOpenModal}>
          <TypeTitle>{recipeType === "" ? placeholder : recipeType}</TypeTitle>
          <Separator />
          <IconWrapper>
            <Feather
              name="arrow-right"
              size={24}
              color={theme.colors.secondary}
            />
          </IconWrapper>
        </Button>
      </TypeWrapper>
    </Container>
  );
}

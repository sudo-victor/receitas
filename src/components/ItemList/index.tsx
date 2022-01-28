import React from "react";
import { Feather, Octicons } from "@expo/vector-icons";

import { Container, Actions, Button, Title } from "./styles";

type Props = {
  title: string;
  onRemove?: (idx) => void;
  onUpdate?: (idx) => void;
};

export function ItemList({ title, onRemove, onUpdate }: Props) {
  return (
    <Container>
      <Title>{title}</Title>

      <Actions>
        <Button onPress={onRemove}>
          <Feather name="trash-2" size={24} color="#FA5949" />
        </Button>

        <Button onPress={onUpdate}>
          <Octicons name="pencil" size={24} color="#C79E0D" />
        </Button>
      </Actions>
    </Container>
  );
}

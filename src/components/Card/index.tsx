import React from "react";
import { MaterialCommunityIcons, Feather, Octicons } from "@expo/vector-icons";

import { Container, Title, Actions, Button } from "./styles";

export function Card() {
  return (
    <Container>
      <Title>Batata Gratinada</Title>

      <Actions>
        <Button>
          <MaterialCommunityIcons
            name="content-copy"
            size={24}
            color="#2C9BCB"
          />
        </Button>

        <Button>
          <Feather name="trash-2" size={24} color="#FA5949" />
        </Button>

        <Button>
          <Octicons name="pencil" size={24} color="#C79E0D" />
        </Button>
      </Actions>
    </Container>
  );
}

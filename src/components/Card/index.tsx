import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons, Feather, Octicons } from "@expo/vector-icons";

import { Container, Title, Actions, Button, ButtonWrapper } from "./styles";
import { IRecipe } from "../../dtos/IRecipe";

type Props = TouchableOpacityProps & {
  data: IRecipe;
  onDuplicate: (data: IRecipe) => void;
  onDelete: (id: string) => void;
  onEdit: (data: IRecipe) => void;
};

export function Card({ data, onDuplicate, onDelete, onEdit, ...rest }: Props) {
  return (
    <Container>
      <ButtonWrapper {...rest}>
        <Title>{data.name}</Title>
      </ButtonWrapper>

      <Actions>
        <Button onPress={() => onDuplicate(data)}>
          <MaterialCommunityIcons
            name="content-copy"
            size={24}
            color="#2C9BCB"
          />
        </Button>

        <Button onPress={() => onDelete(data.id)}>
          <Feather name="trash-2" size={24} color="#FA5949" />
        </Button>

        <Button onPress={() => onEdit(data)}>
          <Octicons name="pencil" size={24} color="#C79E0D" />
        </Button>
      </Actions>
    </Container>
  );
}

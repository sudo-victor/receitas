import React from "react";
import { useTheme } from "styled-components";
import { Feather as Icon } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

import { Container, Input, Separator, Button } from "./styles";

type Props = TextInputProps & {
  onActionPress: () => void;
};

export function InputButton({ onActionPress, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Input {...rest} onSubmitEditing={onActionPress} />
      <Separator />
      <Button onPress={onActionPress}>
        <Icon name="check" size={20} color={theme.colors.secondary} />
      </Button>
    </Container>
  );
}

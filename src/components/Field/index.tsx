import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { InputButton } from "../Input/InputButton";
import { SimpleInput } from "../Input/SimpleInput";

import { Container, Label } from "./styles";

type Props = TextInputProps & {
  title: string;
  inputType?: "default" | "withButton";
  onActionPress?: () => void;
};

export function Field({
  title,
  onActionPress,
  inputType = "default",
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Label>{title}</Label>
      {inputType === "default" ? (
        <SimpleInput {...rest} selectionColor={theme.colors.primary} />
      ) : (
        <InputButton
          {...rest}
          selectionColor={theme.colors.primary}
          onActionPress={onActionPress}
        />
      )}
    </Container>
  );
}

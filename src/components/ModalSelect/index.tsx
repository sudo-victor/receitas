import React from "react";
import { ModalProps } from "react-native";
import { Header } from "../Header";

import { Container, List, Item, ItemTitle, SeparatorItem } from "./styles";

type Props = ModalProps & {
  title: string;
  items: string[];
  handleSelectItem: (value: string) => void;
};

export function ModalSelect({
  title,
  items,
  handleSelectItem,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <Header title={title} />

      <List
        data={items}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Item onPress={() => handleSelectItem(item)}>
            <ItemTitle>{item}</ItemTitle>
          </Item>
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <SeparatorItem />}
      />
    </Container>
  );
}

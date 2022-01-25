import React from "react";
import { FlatList } from "react-native";
import { Card } from "../../components/Card";

import { Header } from "../../components/Header";
import { NoContent } from "../../components/NoContent";
import { Plus } from "../../components/Plus";

import { Container, SeparatorCard } from "./styles";

export function Home() {
  return (
    <Container>
      <Header title="Receitas" />

      <FlatList
        data={[0, 1, 2]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Card />}
        contentContainerStyle={{
          padding: 24,
        }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <SeparatorCard />}
        // ItemSeparatorComponent={}
      />

      <Plus />
    </Container>
  );
}

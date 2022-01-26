import { StatusBar } from "expo-status-bar";
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
      <StatusBar style="light" />
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
      />

      <Plus />
    </Container>
  );
}

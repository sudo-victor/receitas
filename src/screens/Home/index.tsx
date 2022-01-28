import React, { useEffect, useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { BackHandler, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { Card } from "../../components/Card";
import { InputButton } from "../../components/Input/InputButton";
import { IRecipe } from "../../dtos/IRecipe";
import { NoContent } from "../../components/NoContent";
import { Plus } from "../../components/Plus";
import { LoadAnimated } from "../../components/LoadAnimated";
import { useStorage } from "../../hooks/storage";

import {
  Container,
  SeparatorCard,
  Header,
  Title,
  SearchWrapper,
} from "./styles";

export function Home() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const { handleGetRecipes, handleRemoveRecipe, handleAddRecipe } =
    useStorage();

  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>([]);

  function handleOpenRecipeInfo(data: IRecipe) {
    navigate("Recipe", { recipe: data });
  }

  async function handleDeleteCard(id: string) {
    if (id.length === 0) return;

    await handleRemoveRecipe(id);
    loadRecipes();
  }

  async function handleDuplicateCard(data: IRecipe) {
    data.id = Math.random().toString(36);
    data.createdAt = new Date();
    await handleAddRecipe(data);
    loadRecipes();
  }

  async function handleEditCard(data: IRecipe) {
    navigate("RecipeForm", { recipe: data });
  }

  function handleSearchRecipe() {
    if (searchText.trim().length === 0) {
      setFilteredRecipes(recipes);
    }

    const filteredItems = recipes.filter((recipe) =>
      recipe.name
        .toLocaleLowerCase()
        .includes(searchText.trim().toLocaleLowerCase())
    );

    setFilteredRecipes(filteredItems);
    setSearchText("");
  }

  async function loadRecipes() {
    const recipeGroup = ((await handleGetRecipes()) as IRecipe[]) || [];
    setRecipes(recipeGroup);
    setFilteredRecipes(recipeGroup);

    if (filteredRecipes.length === 0) {
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadRecipes();
    }, [])
  );

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);

    const time = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <Container>
      <StatusBar style="light" />

      <Header>
        <Title>Receitas</Title>
      </Header>

      <SearchWrapper>
        <InputButton
          placeholder="Qual o nome da receita?"
          onActionPress={handleSearchRecipe}
          iconName="search"
          selectionColor={colors.primary}
          value={searchText}
          onChangeText={(e) => setSearchText(e)}
        />
      </SearchWrapper>

      {isLoading && <LoadAnimated />}

      {filteredRecipes.length === 0 && !isLoading ? (
        <NoContent title="Adicione uma receita" />
      ) : (
        <FlatList
          data={filteredRecipes}
          keyExtractor={(item) => String(item.id)}
          style={{ display: isLoading ? "none" : "flex" }}
          renderItem={({ item }) => (
            <Card
              data={item}
              onDelete={handleDeleteCard}
              onDuplicate={handleDuplicateCard}
              onEdit={handleEditCard}
              onPress={() => handleOpenRecipeInfo(item)}
            />
          )}
          contentContainerStyle={{
            padding: 24,
          }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <SeparatorCard />}
        />
      )}
      <Plus />
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Header } from "../../components/Header";
import { LoadAnimated } from "../../components/LoadAnimated";
import { IRecipe } from "../../dtos/IRecipe";

import { Container, Title, Item, Main, RecipeType } from "./styles";
import { useTheme } from "styled-components";

const iconName = {
  Salgado: "food-drumstick",
  Doce: "cupcake",
  Bebida: "beer",
};

export function Recipe({ route }) {
  const { colors } = useTheme();
  const [recipe, setRecipe] = useState<IRecipe>(null);
  const [isLoading, setIsLoading] = useState(true);

  function loadRecipeByRoute() {
    const data = route.params;
    if (!data) return;

    const { recipe: recipeData } = data;
    setRecipe(recipeData);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    loadRecipeByRoute();
  }, []);

  return (
    <Container>
      <Header title={isLoading ? "Carregando..." : recipe.name} hasGoBack />
      {isLoading ? (
        <LoadAnimated />
      ) : (
        <Main>
          <RecipeType>
            <MaterialCommunityIcons
              name={iconName[recipe.type]}
              color={colors.complementary}
              size={24}
            />
          </RecipeType>

          <Title>Ingredientes</Title>

          {recipe.ingredients.map((ingredient, idx) => (
            <Item key={ingredient}>{`${idx + 1} - ${ingredient}`}</Item>
          ))}

          <Title>Modo de preparo</Title>

          {recipe.preparationItems.map((preparationItem, idx) => (
            <Item key={preparationItem}>{`${
              idx + 1
            } - ${preparationItem}`}</Item>
          ))}
        </Main>
      )}
    </Container>
  );
}

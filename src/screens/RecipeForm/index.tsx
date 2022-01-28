import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { Header } from "../../components/Header";
import { Field } from "../../components/Field";
import { ItemList } from "../../components/ItemList";
import { SubmitButton } from "../../components/SubmitButton";
import { ModalSelect } from "../../components/ModalSelect";
import { useStorage } from "../../hooks/storage";
import { FieldSelect } from "../../components/Field/FieldSelect";

import { Container, Form, Wrapper } from "./styles";

export function RecipeForm({ route }) {
  const { navigate } = useNavigation();
  const { handleAddRecipe, handleEditRecipe } = useStorage();
  const inputIngredientEl = useRef(null);
  const inputPreparationItemEl = useRef(null);

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [preparationItems, setPreparationItems] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState("");
  const [currentIngrendient, setCurrentIngrendient] = useState("");
  const [currentPreparationItem, setCurrentPreparationItem] = useState("");
  const [recipeType, setRecipeType] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [currentId, setCurrentId] = useState("");

  const [currentIngredientIdEdit, setCurrentIngredientIdEdit] = useState("");
  const [currentPreparatioItemIdEdit, setCurrentPreparatioItemIdEdit] =
    useState("");

  function handleAddIngredient() {
    if (currentIngrendient.trim().length === 0) return;

    if (currentIngredientIdEdit.length > 0) {
      const listUpdated = ingredients.map((ingredient, idx) => {
        if (idx === Number(currentIngredientIdEdit)) {
          return currentIngrendient.trim();
        }
        return ingredient;
      });

      setIngredients([...listUpdated]);
      setCurrentIngrendient("");
      return;
    }

    setIngredients([...ingredients, currentIngrendient.trim()]);
    setCurrentIngrendient("");
  }

  function handleRemoveIngredient(index: number) {
    const listFiltered = ingredients.filter((_, idx) => idx !== index);

    setIngredients([...listFiltered]);
  }

  function handleUpdateIngredient(index: number) {
    setCurrentIngredientIdEdit(String(index));
    const current = ingredients.find((_, idx) => idx === index);

    setCurrentIngrendient(current);
  }

  function handleAddPreparationItem() {
    if (currentPreparationItem.trim().length === 0) return;

    if (currentPreparatioItemIdEdit.length > 0) {
      const listUpdated = preparationItems.map((preparationItem, idx) => {
        if (idx === Number(currentPreparatioItemIdEdit)) {
          return currentPreparationItem.trim();
        }
        return preparationItem;
      });

      setPreparationItems([...listUpdated]);
      setCurrentPreparationItem("");
      return;
    }

    setPreparationItems([...preparationItems, currentPreparationItem.trim()]);
    setCurrentPreparationItem("");
  }

  function handleRemovePreparationItem(index: number) {
    const listFiltered = preparationItems.filter((_, idx) => idx !== index);

    setPreparationItems([...listFiltered]);
  }

  function handleUpdatePreparationItem(index: number) {
    setCurrentPreparatioItemIdEdit(String(index));
    const current = preparationItems.find((_, idx) => idx === index);

    setCurrentPreparationItem(current);
  }

  async function handleSubmit() {
    if (
      name.trim().length === 0 ||
      preparationItems.length === 0 ||
      ingredients.length === 0 ||
      recipeType.trim().length === 0
    )
      return;

    const isToUpdate = currentId !== "" ? true : false;

    const data = {
      id: isToUpdate ? currentId : Math.random().toString(36),
      name: name.trim(),
      preparationItems,
      ingredients,
      type: recipeType,
      createdAt: isToUpdate ? createdAt : new Date(),
    };

    isToUpdate ? await handleEditRecipe(data) : await handleAddRecipe(data);
    navigate("Home");
  }

  function handleOpenModal() {
    setModalVisible(true);
  }

  function handleSelectRecipeType(value: string) {
    setRecipeType(value);
    setModalVisible(false);
  }

  function loadRecipeByRoute() {
    const data = route.params;
    if (!data) return;

    const { recipe } = data;

    setCurrentId(recipe.id);
    setCreatedAt(recipe.createdAt);
    setPreparationItems(recipe.preparationItems);
    setIngredients(recipe.ingredients);
    setName(recipe.name);
    setRecipeType(recipe.type);
  }

  useEffect(() => {
    loadRecipeByRoute();
  }, []);

  return (
    <Container>
      <StatusBar style="light" />
      <Header
        title={currentId !== "" ? "Editar Receita" : "Adicionar Receita"}
        hasGoBack
      />

      <Form>
        <Wrapper>
          <Field
            title="Qual o nome da receita?"
            placeholder="Digite o nome"
            value={name}
            onChangeText={(e) => setName(e)}
          />

          <FieldSelect
            title="Qual o tipo da receita?"
            placeholder="Selecione o tipo"
            handleOpenModal={handleOpenModal}
            recipeType={recipeType}
          />

          <Field
            title="Ingredientes"
            placeholder="Digite os ingredientes"
            inputType="withButton"
            value={currentIngrendient}
            onChangeText={(e) => setCurrentIngrendient(e)}
            onActionPress={handleAddIngredient}
          />

          {ingredients.map((item, idx) => (
            <ItemList
              key={String(idx)}
              title={item}
              onRemove={() => handleRemoveIngredient(idx)}
              onUpdate={() => handleUpdateIngredient(idx)}
            />
          ))}

          <Field
            title="Modo de preparo"
            placeholder="Digite o modo de preparo"
            inputType="withButton"
            value={currentPreparationItem}
            onChangeText={(e) => setCurrentPreparationItem(e)}
            onActionPress={handleAddPreparationItem}
          />

          {preparationItems.map((item, idx) => (
            <ItemList
              key={String(idx)}
              title={item}
              onRemove={() => handleRemovePreparationItem(idx)}
              onUpdate={() => handleUpdatePreparationItem(idx)}
            />
          ))}
        </Wrapper>

        <SubmitButton
          title={currentId !== "" ? "Editar" : "Criar"}
          onPress={handleSubmit}
        />
      </Form>

      <ModalSelect
        animationType="slide"
        visible={modalVisible}
        title="Tipo da receita"
        items={["Salgado", "Doce", "Bebida"]}
        handleSelectItem={handleSelectRecipeType}
      />
    </Container>
  );
}

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { v4 as uuid } from "uuid";

import { Header } from "../../components/Header";
import { Field } from "../../components/Field";
import { ItemList } from "../../components/ItemList";
import { SubmitButton } from "../../components/SubmitButton";
import { ModalSelect } from "../../components/ModalSelect";

import {
  Container,
  Form,
  Wrapper,
  SelectContainer,
  Label,
  TypeWrapper,
  ButtonSelect,
  TypeTitle,
  Separator,
  IconWrapper,
} from "./styles";

export function RecipeForm() {
  const theme = useTheme();

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [preparationItems, setPreparationItems] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState("");
  const [currentIngrendient, setCurrentIngrendient] = useState("");
  const [currentPreparationItem, setCurrentPreparationItem] = useState("");
  const [recipeType, setRecipeType] = useState("");

  function handleAddIngredient() {
    if (currentIngrendient.trim().length === 0) return;

    setIngredients([...ingredients, currentIngrendient]);
    setCurrentIngrendient("");
  }

  function handleRemoveIngredient(index: number) {
    const listFiltered = ingredients.filter((_, idx) => idx !== index);

    setIngredients([...listFiltered]);
  }

  function handleAddPreparationItem() {
    if (currentPreparationItem.trim().length === 0) return;

    setPreparationItems([...preparationItems, currentPreparationItem]);
    setCurrentPreparationItem("");
  }

  function handleRemovePreparationItem(index: number) {
    const listFiltered = preparationItems.filter((_, idx) => idx !== index);

    setPreparationItems([...listFiltered]);
  }

  function handleSubmit() {
    if (
      name.trim().length === 0 ||
      preparationItems.length === 0 ||
      ingredients.length === 0 ||
      recipeType.trim().length === 0
    )
      return;

    const data = {
      id: Math.random().toString(36),
      name,
      preparationItems,
      ingredients,
      type: recipeType,
    };

    console.log(data);
  }

  function handleOpenModal() {
    setModalVisible(true);
  }

  function handleSelectRecipeType(value: string) {
    setRecipeType(value);
    setModalVisible(false);
  }

  return (
    <Container>
      <StatusBar style="light" />
      <Header title="Adicionar Receita" />

      <Form>
        <Wrapper>
          <Field
            title="Qual o nome da receita?"
            placeholder="Digite o nome"
            value={name}
            onChangeText={(e) => setName(e)}
          />

          <SelectContainer>
            <Label>Qual o tipo da receita?</Label>
            <TypeWrapper>
              <ButtonSelect onPress={handleOpenModal}>
                <TypeTitle>
                  {recipeType === "" ? "Selecione o tipo" : recipeType}
                </TypeTitle>
                <Separator />
                <IconWrapper>
                  <Feather
                    name="arrow-right"
                    size={24}
                    color={theme.colors.secondary}
                  />
                </IconWrapper>
              </ButtonSelect>
            </TypeWrapper>
          </SelectContainer>

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
            />
          ))}
        </Wrapper>

        <SubmitButton title="Criar" onPress={handleSubmit} />
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

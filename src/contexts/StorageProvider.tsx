import { createContext, ReactNode } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { IRecipe } from "../dtos/IRecipe";

type ContextProps = {
  handleAddRecipe: (recipe: IRecipe) => Promise<boolean>;
  handleEditRecipe: (recipe: IRecipe) => Promise<boolean>;
  handleRemoveRecipe: (id: string) => Promise<boolean>;
  handleGetRecipe: (id: string) => Promise<boolean | Error>;
  handleGetRecipes: (id: string) => Promise<boolean>;
};

type Props = {
  children: ReactNode;
};

export const StorageContext = createContext({} as ContextProps);

export function StorageProvider({ children }: Props) {
  const { setItem, getItem } = useAsyncStorage("@receita:items");

  async function handleAddRecipe(recipe: IRecipe): Promise<boolean> {
    try {
      const itemsList = JSON.parse(await getItem());
      itemsList.push(recipe);

      await setItem(JSON.stringify(itemsList));
      return true;
    } catch {
      return false;
    }
  }

  async function handleEditRecipe(recipe: IRecipe): Promise<boolean> {
    try {
      let itemsList = JSON.parse(await getItem());
      itemsList = itemsList.map((item) => {
        if (item.id === recipe.id) {
          item = recipe;
        }
        return item;
      });

      await setItem(JSON.stringify(itemsList));
      return true;
    } catch {
      return false;
    }
  }

  async function handleRemoveRecipe(id: string): Promise<boolean> {
    try {
      let itemsList = JSON.parse(await getItem());
      itemsList = itemsList.filter((item) => item.id !== id);

      await setItem(JSON.stringify(itemsList));
      return true;
    } catch {
      return false;
    }
  }

  async function handleGetRecipe(id: string): Promise<boolean | Error> {
    try {
      let itemsList = JSON.parse(await getItem());
      const recipe = itemsList.find((item) => item.id === id);

      if (!recipe) {
        return new Error("Recipe not found");
      }

      return recipe;
    } catch {
      return false;
    }
  }

  async function handleGetRecipes(id: string): Promise<boolean> {
    try {
      let itemsList = JSON.parse(await getItem());

      return itemsList;
    } catch {
      return false;
    }
  }

  return (
    <StorageContext.Provider
      value={{
        handleAddRecipe,
        handleEditRecipe,
        handleRemoveRecipe,
        handleGetRecipe,
        handleGetRecipes,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}

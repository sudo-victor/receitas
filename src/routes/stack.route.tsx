import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Splash } from "../screens/Splash";
import { Home } from "../screens/Home";
import { Recipe } from "../screens/Recipe";
import { RecipeForm } from "../screens/RecipeForm";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} />
      <Screen name="Recipe" component={Recipe} />
      <Screen name="RecipeForm" component={RecipeForm} />
    </Navigator>
  );
}

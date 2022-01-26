import React from "react";
import { Sofia_400Regular, useFonts } from "@expo-google-fonts/sofia";
import AppLoading from "expo-app-loading";
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { ThemeProvider } from "./src/contexts/ThemeProvider";
import { StorageProvider } from "./src/contexts/StorageProvider";
import { Routes } from "./src/routes";

export default function App() {
  const [fonstLoaded] = useFonts({
    Sofia_400Regular,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider>
      <StorageProvider>
        <Routes />
      </StorageProvider>
    </ThemeProvider>
  );
}

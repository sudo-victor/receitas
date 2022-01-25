import { StatusBar } from "expo-status-bar";
import React from "react";
import { Sofia_400Regular, useFonts } from "@expo-google-fonts/sofia";
import AppLoading from "expo-app-loading";
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

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
    <>
      <StatusBar style="auto" />
    </>
  );
}

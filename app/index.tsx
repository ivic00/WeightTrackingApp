import React from "react";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { Tabs } from "expo-router";
import App from "@/App";

export default function Index() {
  return <PaperProvider theme={MD3LightTheme}>
    <App />
  </PaperProvider>;
}

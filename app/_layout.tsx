import NavBar from "@/src/components/Nav/NavBar";
import { Tabs } from "expo-router";
import { MD3LightTheme, PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <NavBar {...props} />}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="home" options={{ title: "View" }} />
      </Tabs>
    </PaperProvider>
  );
}

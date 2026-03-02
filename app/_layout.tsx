import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs>
    <Tabs.Screen name="index" options={{title: "Home"}}/>
    <Tabs.Screen name="home" options={{title: "View"}}/>
    <Tabs.Screen name="add" options={{title: "Add"}}/>
  </Tabs>;
}

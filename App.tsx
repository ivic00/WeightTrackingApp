import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const App = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Some Text</Text>
    </View>
  );
};

export default App;

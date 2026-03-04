import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

interface NavButtonProps {
  children: ReactNode;
}

export default function NavButton({ children }: NavButtonProps) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.button,
        { backgroundColor: theme.colors.primary },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  button: { height: 60, width: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 50, margin: 6 },
});

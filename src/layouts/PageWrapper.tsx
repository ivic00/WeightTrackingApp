import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Surface, Text, useTheme } from "react-native-paper";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const theme = useTheme();

  return (
    <Surface
      style={[
        styles.pageBackground,
        { backgroundColor: theme.colors.background },
      ]}
      elevation={0}
    >
      <Surface
        style={[styles.header, { backgroundColor: theme.colors.background }]}
        elevation={0}
      >
        <Text variant="headlineLarge">Weight Tracker</Text>
      </Surface>
      <Surface
        style={[
          styles.pageContentContainer,
          { backgroundColor: theme.colors.background },
        ]}
        elevation={0}
      >
        {children}
      </Surface>
    </Surface>
  );
};

export default PageWrapper;

const styles = StyleSheet.create({
  pageBackground: {
    flex: 1,
    flexDirection: "column",
  },
  header: { marginTop: 15, padding: 15 },
  pageContentContainer: {
    padding: 15,
    flex: 1,
  },
});

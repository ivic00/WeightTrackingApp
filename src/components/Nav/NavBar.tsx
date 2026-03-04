import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Surface, useTheme } from "react-native-paper";

const NavBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const theme = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <Surface
      style={[
        styles.navBar,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
      elevation={5}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label: string =
          typeof options.tabBarLabel === "function"
            ? (options.title ?? route.name)
            : (options.tabBarLabel ?? options.title ?? route.name);

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            style={{ flex: 1 }} // Keeps the button wide
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Button
              mode={isFocused ? "contained" : "contained-tonal"}
              style={[styles.navButton, { flex: 1 }]}
              contentStyle={{ flex: 1 }}
              icon="home"
            >
              <Text
                style={{
                  color: isFocused
                    ? theme.colors.onPrimary
                    : theme.colors.onSurface,
                }}
              >
                {label}
              </Text>
            </Button>
          </PlatformPressable>
        );
      })}
    </Surface>
  );
};

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    marginHorizontal: 20,
    //paddingVertical: 15,
    borderRadius: 100,
    overflow: "hidden",
  },
  navButton: {
    margin: 5,
  },
});

export default NavBar;

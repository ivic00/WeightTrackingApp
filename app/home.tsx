import PageWrapper from "@/src/layouts/PageWrapper";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Card, FAB, Text, useTheme } from "react-native-paper";

interface FABState {
  open: boolean;
}

const home = () => {
  const theme = useTheme();

  const [state, setState] = useState<FABState>({ open: false });
  const onStateChange = ({ open }: { open: boolean }) => setState({ open });
  const { open } = state;

  return (
    <PageWrapper>
      <Card style={{}} mode="outlined">
        <Card.Content>
          <Text>Negg</Text>
        </Card.Content>
      </Card>
      <FAB.Group
        open={open}
        visible
        icon={open ? "calendar-today" : "plus"}
        style={styles.fab}
        actions={[
          { icon: "plus", onPress: () => console.log("Pressed add") },
          {
            icon: "dumbbell",
            label: "Workout",
            onPress: () => console.log("Pressed add workout"),
          },
          {
            icon: "weight",
            label: "Weight",
            onPress: () => console.log("Pressed add weight"),
            size: "medium",
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </PageWrapper>
  );
};

export default home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 55,
  },
});

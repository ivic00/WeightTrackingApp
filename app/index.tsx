import PageWrapper from "@/src/layouts/PageWrapper";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const index = () => {
  return (
    <PageWrapper>
      <View>
        <Text>Index Page</Text>
      </View>
    </PageWrapper>
  );
};

export default index;

const styles = StyleSheet.create({});

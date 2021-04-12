import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "#ff0000" }} />
      <View style={{ flex: 2, backgroundColor: "#d9d9d9" }} />
      <View style={{ flex: 3, backgroundColor: "#ff0000" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // padding: 5,
  },
});

export default Flex;
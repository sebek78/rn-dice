import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface ResultProp {
  result: number;
}

export default function ResultBox({result}: ResultProp) {
  return (
    <View style={styles.container}>
        <Text>{result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid green",
    flexDirection: 'row',
    maxHeight: 100, /* test only */
  },
});
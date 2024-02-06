import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const ButtonPrimary = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A06379",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});

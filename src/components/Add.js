import { StyleSheet, TextInput, View, Text } from "react-native";
import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const Add = ({
  taskTitle,
  taskDesc,
  handleChangeTitle,
  handleChangeDes,
  agregar,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TAREAS</Text>
      <TextInput
        value={taskTitle}
        onChangeText={handleChangeTitle}
        placeholder="nombre"
        placeholderTextColor="#CE97AE"
        style={styles.input}
        maxLength={25}
      ></TextInput>
      <TextInput
        value={taskDesc}
        onChangeText={handleChangeDes}
        placeholder="descripcion"
        placeholderTextColor="#CE97AE"
        multiline
        numberOfLines={4}
        style={styles.inputDesc}
        maxLength={100}
      ></TextInput>
      <ButtonPrimary title="Agregar" onPress={agregar}></ButtonPrimary>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    margin: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: "#A06379",
    paddingHorizontal: 10,
    width: "100%",
    height: 50,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    fontSize: 16,
    color: "#A06379",
    borderRadius: 5,
    textAlignVertical: "top",
  },
  inputDesc: {
    borderWidth: 2,
    borderColor: "#A06379",
    paddingHorizontal: 10,
    width: "100%",
    height: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    fontSize: 16,
    color: "#A06379",
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    color: "#A06379",
    fontWeight: "900",
    margin: 20,
  },
});

import { StyleSheet, Text, View, Switch } from "react-native";
import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const CardList = ({ handleModal, item, screenWidth, actualizar }) => {
  return (
    <View style={[styles.tarea, { width: screenWidth - 20 }]}>
      <View style={styles.juntos}>
        <Text style={styles.titulo}>{item.title}</Text>
        <Text style={styles.creado}>{item.createAt}</Text>
      </View>
      {/* <Text style={styles.actualizado}>Actualizado: {item.updateAt}</Text> */}
      <Text style={styles.descripcion}>{item.description}</Text>
      <View style={styles.juntos2}>
        <Switch
          trackColor={{ false: "white", true: "#A06379" }}
          value={item.completed}
          onValueChange={() => actualizar(item.id)}
        ></Switch>
        <Text style={styles.completado}>
          {item.completed ? "Completado" : "Pendiente"}
        </Text>
      </View>
      <ButtonPrimary
        title="Eliminar"
        onPress={() => handleModal(item)}
      ></ButtonPrimary>
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  tarea: {
    backgroundColor: "#CE97AE",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: "flex-start",
    gap: 25,
    borderRadius: 5,
  },
  juntos: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  juntos2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  titulo: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  descripcion: {
    color: "white",
    fontSize: 18,
  },
  creado: {
    color: "white",
    fontSize: 16,
    fontStyle: "italic",
  },
  completado: {
    color: "white",
    fontSize: 16,
    fontStyle: "italic",
  },
});

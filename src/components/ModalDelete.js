import { StyleSheet, Text, View, Modal } from "react-native";
import ButtonPrimary from "./ButtonPrimary";

const ModalDelete = ({ modalVisible, taskSelec, borrar, handleModal }) => {
  return (
    <View style={styles.modal}>
      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => handleModal({})}
      >
        <View style={styles.contenedor}>
          <View style={styles.contenedor2}>
            <Text style={styles.text}>Queres borrar: {taskSelec.title}?</Text>
            <ButtonPrimary title="Si" onPress={borrar}></ButtonPrimary>
            <ButtonPrimary
              title="No"
              onPress={() => handleModal({})}
            ></ButtonPrimary>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalDelete;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contenedor2: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    backgroundColor: "#CE97AE",
    width: "70%",
    gap: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

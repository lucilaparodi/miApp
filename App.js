import { useState } from "react";
import uuid from "react-native-uuid";
import { StyleSheet, View, Dimensions } from "react-native";
import ModalDelete from "./src/components/ModalDelete";
import Add from "./src/components/Add";
import List from "./src/components/List";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskSelec, setTaskSelec] = useState({});
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [tareas, setTareas] = useState([]);
  const screenWidth = Dimensions.get("window").width;

  const agregar = () => {
    const newTask = {
      id: uuid.v4(),
      title: taskTitle,
      createAt: new Date().toLocaleDateString(),
      updateAt: new Date().toLocaleDateString(),
      description: taskDesc,
      completed: false,
    };

    setTareas([...tareas, newTask]);

    setTaskDesc("");
    setTaskTitle("");
  };

  const handleModal = (tarea) => {
    setTaskSelec(tarea);
    setModalVisible(!modalVisible);
  };

  const borrar = () => {
    setTareas(tareas.filter((tarea) => tarea.id != taskSelec.id));
    setModalVisible(!modalVisible);
    console.log();
  };

  const handleChangeTitle = (t) => {
    setTaskTitle(t);
  };

  const handleChangeDes = (d) => {
    setTaskDesc(d);
  };

  const actualizar = (id) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id === id)
          return { ...tarea, ...{ completed: !tarea.completed } };
        return tarea;
      })
    );
  };

  return (
    <View style={styles.container}>
      <Add
        taskTitle={taskTitle}
        taskDesc={taskDesc}
        handleChangeDes={handleChangeDes}
        handleChangeTitle={handleChangeTitle}
        agregar={agregar}
      />

      <List
        tareas={tareas}
        handleModal={handleModal}
        screenWidth={screenWidth}
        actualizar={actualizar}
      />

      <ModalDelete
        modalVisible={modalVisible}
        taskSelec={taskSelec}
        borrar={borrar}
        handleModal={handleModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3C3CE",
    paddingTop: 30,
  },
});

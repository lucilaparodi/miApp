import { useState } from 'react';
import uuid from 'react-native-uuid';
import { StyleSheet, View} from 'react-native';
import ModalDelete from './src/components/ModalDelete';
import Add from './src/components/Add';
import List from './src/components/List';

export default function App() {

  const [taskSelec, setTaskSelec] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDesc, setTaskDesc] = useState("")
  const [tareas, setTareas] = useState ([]);

  const agregar = () => {

    const newTask = {
      id: uuid.v4(),
      title: taskTitle,
      createAt: new Date().toLocaleDateString(),
      updateAt: new Date().toLocaleDateString(),
      description: taskDesc
    }

    setTareas([...tareas, newTask])

    setTaskDesc("")
    setTaskTitle("")
  }

  const handleModal = (task) => {
    setModalVisible(!modalVisible)
    setTaskSelec(task)
  }

  const borrar = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !=taskSelec.id))
    setModalVisible(!modalVisible)

  }

  const handleChangeTitle = (t) => {
    setTaskTitle(t);

  }

  const handleChangeDes = (d) => {
    setTaskDesc(d)

  }
  
  return (
    <View style={styles.container}>

    <Add 
    taskTitle={taskTitle} 
    taskDesc={taskDesc} 
    handleChangeDes={handleChangeDes} 
    handleChangeTitle={handleChangeTitle} 
    agregar={agregar}/>
    
    <List 
    tareas={tareas}
    handleModal={handleModal}/>


 
    <ModalDelete 
    modalVisible={modalVisible} 
    taskSelec={taskSelec} 
    borrar={borrar}
    handleModal={handleModal}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3C3CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  button: {
    backgroundColor: '#A06379',
    color: '#F0F0F0'
  },
  
  
});

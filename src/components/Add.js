import { StyleSheet, TextInput, View, Button} from 'react-native'
import React from 'react'

const Add = ({taskTitle, taskDesc, handleChangeTitle, handleChangeDes, agregar}) => {
  return (
    <View style={styles.container2}>
    <TextInput value={taskTitle} onChangeText={handleChangeTitle} placeholder='ingresar nombre' style={styles.input}></TextInput>
    <TextInput value={taskDesc} onChangeText={handleChangeDes} placeholder='ingresar descrpcion' style={styles.input}></TextInput>
    <Button title='agregar' onPress={agregar()}></Button>
  </View>
  )
}

export default Add

const styles = StyleSheet.create({
    container2: {
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
      },

      input:{
        borderColor: '#A06379',
        paddingHorizontal: 3,
        width: 200,
        height: 50,
        margin: 10,
        fontSize: 15,
        borderBottomWidth: 2,
      },

})
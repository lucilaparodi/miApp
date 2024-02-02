import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CardList = ({handleModal, item}) => {
  return (
    <View style={styles.tarea}>
    <Text>{item.title}</Text>
    <Text>{item.description}</Text>
    <Button title='del' onPress={()=> handleModal(item.id)}></Button>
    </View>
  )
}

export default CardList

const styles = StyleSheet.create({ 
  tarea:{
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
    borderRadius: 5,
  }
})
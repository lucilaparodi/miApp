import { StyleSheet, Text, View, Button, FlatList} from 'react-native'
import React from 'react'
import CardList from './CardList'

const List = ({handleModal, tareas}) => {
  return (
    <FlatList 
    style={styles.container3}
    data={tareas}
    keyExtractor={item => item.id}
    renderItem={({item})=>
    <CardList handleModal={handleModal} item={item}/>}
    >
    </FlatList>

  )
}

export default List

const styles = StyleSheet.create({
    container3: {
        height: '40%'
      },
})
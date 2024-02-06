import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import CardList from "./CardList";

const List = ({ handleModal, tareas, screenWidth, actualizar }) => {
  return (
    <View style={styles.container3}>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardList
            handleModal={handleModal}
            item={item}
            screenWidth={screenWidth}
            actualizar={actualizar}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});

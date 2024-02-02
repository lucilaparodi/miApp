import { StyleSheet, Text, View, Modal, Button} from 'react-native'

const ModalDelete = ({modalVisible,taskSelec, borrar, handleModal}) => {
  return (
    <Modal visible={modalVisible} animationType='fade' onRequestClose={()=> handleModal({}) }>
      <View>
        <Text>Borrar {taskSelec.title}?</Text>
        <Button title='si' onPress={()=> borrar()}></Button>
        <Button title='no' onPress={()=> handleModal({})}></Button>
      </View>
    </Modal>
  )
}

export default ModalDelete

const styles = StyleSheet.create({})
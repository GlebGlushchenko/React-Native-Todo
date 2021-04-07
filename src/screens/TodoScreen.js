import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button, Modal } from 'react-native'
import { AppCard } from '../AppCard'
import { EditModal } from '../EditModal'

export const TodoScreen = ({ goBack, todo, removeTodo, onChangeTodo }) => {
  const [modal, setModal] = React.useState(false)

  const showModal = () => {
    setModal(true)
  }

  const onCancel = () => {
    setModal(false)
  }
  const saveHandler = (title) => {
    onChangeTodo(todo.id, title)
    setModal(false)
  }
  return (
    <View style={styles.todoScreenWrapper}>
      <EditModal
        onCancel={onCancel}
        value={todo.title}
        todo={todo}
        saveHandler={saveHandler}
        visible={modal}
      />
      <AppCard>
        <Text style={styles.todoScreenTitle}>{todo.title}</Text>
        <View style={styles.button}>
          <Button onPress={showModal} color={'#DBDBDB'} title={'Change'} />
        </View>
      </AppCard>

      <View style={styles.btnWrapper}>
        <View style={styles.button}>
          <Button
            color="#BABABA"
            onPress={() => {
              goBack()
            }}
            title="Back"
          />
        </View>

        <View style={styles.button}>
          <Button
            onPress={() => {
              removeTodo(todo.id)
            }}
            color="red"
            title="Remove"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  todoScreenWrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '90%',
  },
  todoScreenTitle: {
    fontSize: 25,
    marginBottom: 50,
    marginTop: 50,
  },
  btnWrapper: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '40%',
  },
})

import React from 'react'
import { Text, View, StyleSheet, Button, Modal, TextInput, Alert } from 'react-native'

export const EditModal = ({ visible, onCancel, todo, saveHandler, value }) => {
  const [title, setTitle] = React.useState(value)
  const handlerChangeTodo = () => {
    if (title.trim().length < 3) {
      Alert.alert('Error', `Minimal length 3 symbol. Now ${title.trim().length}`)
    } else {
      saveHandler(title)
    }
  }

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{todo.title}</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setTitle}
          value={title}
          style={styles.input}
        />
        <View style={styles.btn}>
          <Button onPress={handlerChangeTodo} title={'Save'} />
        </View>
        <View style={styles.btn}>
          <Button color="red" title={'Cancel'} onPress={onCancel} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginBottom: 20,
    width: 190,
  },
  input: {
    marginBottom: 30,
    marginTop: 30,
    padding: 20,
    fontSize: 20,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
  },
})

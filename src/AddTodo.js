import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const pressHandler = () => {
    if (value.trim()) {
      addTodo(value)
      setValue('')
    } else {
      Alert.alert('Error')
    }
  }
  return (
    <View style={styles.block}>
      <TextInput
        placeholder={'Enter text TODO'}
        value={value}
        onChangeText={setValue}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button onPress={pressHandler} color="#BABABA" style={styles.btn} title={'Add'} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  input: {
    padding: 10,
    width: '70%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#BABABA',
    backgroundColor: '#DFDFDF',
  },
  btn: {},
})

import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, removeTodo, onOpen }) => {
  const handlerRemove = (id) => {
    removeTodo(id)
  }
  return (
    <TouchableOpacity
      onPress={() => onOpen(todo.id)}
      onLongPress={() => handlerRemove(todo.id)}
      activeOpacity={0.5}>
      <View style={styles.todo1}>
        <Text style={styles.text}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    backgroundColor: '#DFDFDF',
    marginTop: 10,
  },
  text: {
    fontFamily: 'robotoRegular',
  },
})

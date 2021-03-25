import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { AddTodo } from '../AddTodo'
import { Placeholder } from '../Placeholder'
import { Todo } from '../Todo'

export const MainScreen = ({ addTodo, todos, removeTodo, onOpen }) => {
  return (
    <View style={styles.container}>
      <AddTodo addTodo={addTodo} />
      {todos.length === 0 ? (
        <Placeholder style={styles.placeholder} />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo onOpen={onOpen} removeTodo={removeTodo} todo={item} />}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  placeholder: {
    position: 'absolute',
    top: 0,
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    height: '80%',
    position: 'relative',
  },
})

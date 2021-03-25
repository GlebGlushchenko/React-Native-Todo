import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

import { Navbar } from './src/Navbar'

import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'edasd',
    },
  ])
  const titleText = 'Todo App'

  const addTodo = (title) => {
    setTodos((prev) => [...prev, { id: Date.now().toString(), title }])
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const onOpen = (id) => {
    setTodoId(id)
  }
  const backToMainScreen = () => {
    setTodoId(null)
  }
  let content = (
    <MainScreen onOpen={onOpen} removeTodo={removeTodo} addTodo={addTodo} todos={todos} />
  )

  if (todoId) {
    content = (
      <TodoScreen
        todo={todos.find((todo) => todo.id === todoId)}
        backToMainScreen={backToMainScreen}
      />
    )
  }

  return (
    <View style={styles.appWrapper}>
      <Navbar titleText={titleText} />
      <View>{content}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,

    position: 'relative',
  },
  appWrapper: {
    // flexDirection: 'column',
    // backgroundColor: '#EEEEEE',
    // justifyContent: 'space-between',
  },
  placeholder: {
    position: 'absolute',
    top: 0,
  },
})

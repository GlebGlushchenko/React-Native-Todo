import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import { Navbar } from './src/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

async function loadApplication() {
  await Font.loadAsync({
    robotoRegular: require('./assets/fonts/Roboto-Bold.ttf'),
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {
      id: '1',
      title: 'Выучть React JS',
    },
    {
      id: '2',
      title: 'Выучть React Native',
    },
    {
      id: '3',
      title: 'Выучть React Native',
    },
  ])
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={console.log('Error')}
        onFinish={() => {
          setIsReady(true)
        }}
      />
    )
  }
  const titleText = 'Todo App'

  const addTodo = (title) => {
    setTodos((prev) => [...prev, { id: Date.now().toString(), title }])
  }

  const removeTodo = (id) => {
    const todoName = todos.find((t) => t.id === id)

    Alert.alert('Remove Todo', ` You are sure remove ${todoName.title}?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Remove',
        style: 'positive',
        onPress: () => {
          setTodoId(null)
          setTodos((prev) => prev.filter((todo) => todo.id !== id))
        },
      },
    ])
  }
  const onOpen = (id) => {
    setTodoId(id)
  }
  const goBack = () => {
    setTodoId(null)
  }

  const updateTodo = (id, title) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title
        }
        return todo
      }),
    )
  }

  let content = (
    <MainScreen onOpen={onOpen} removeTodo={removeTodo} addTodo={addTodo} todos={todos} />
  )

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId)

    content = (
      <TodoScreen
        onChangeTodo={updateTodo}
        removeTodo={removeTodo}
        todo={selectedTodo}
        goBack={goBack}
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
  appWrapper: {
    backgroundColor: '#FFFFFF',
  },
  placeholder: {
    position: 'absolute',
    top: 0,
  },
})

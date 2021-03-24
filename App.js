import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { AddTodo } from './src/AddTodo'
import { Footer } from './src/Footer'
import { Navbar } from './src/Navbar'
import { Placeholder } from './src/Placeholder'
import { Todo } from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([])
  const titleText = 'Todo App'

  const addTodo = (title) => {
    setTodos((prev) => [...prev, { id: Date.now().toString(), title }])
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <View style={styles.appWrapper}>
      <Navbar titleText={titleText} />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        {todos.length === 0 ? (
          <Placeholder style={styles.placeholder} />
        ) : (
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={todos}
            renderItem={({ item }) => <Todo removeTodo={removeTodo} todo={item} />}
          />
        )}

        {/* <View>
          {todos.map((todo, index) => (
            <Todo todo={todo} key={index}></Todo>
          ))}
        </View> */}
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    height: '80%',
    position: 'relative',
  },
  appWrapper: {
    flexDirection: 'column',
    // height: '100%',
    backgroundColor: '#EEEEEE',
    justifyContent: 'space-between',
  },
  placeholder: {
    position: 'absolute',
    top: 0,
  },
})

import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'

export const TodoScreen = ({ backToMainScreen, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button
        onPress={() => {
          backToMainScreen()
        }}
        title="Back"
      />
    </View>
  )
}

const styles = StyleSheet.create({})

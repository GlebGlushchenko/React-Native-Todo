import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import noItemImg from '../src/img/noTodo.gif'

export const Placeholder = () => {
  return (
    <View style={styles.block}>
      <Image style={styles.img} source={noItemImg} />
      <Text style={styles.text}>Not Todo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    height: 100,
    width: 300,
    position: 'absolute',
    top: 300,
    right: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  text: {
    fontSize: 25,
    textTransform: 'uppercase',
  },
})

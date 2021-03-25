import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Placeholder = () => {
  return (
    <View style={styles.block}>
      <Text>Not Todo</Text>
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
    backgroundColor: '#B6B6B6',
  },
})

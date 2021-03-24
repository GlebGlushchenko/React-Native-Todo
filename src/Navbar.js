import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = ({ titleText }) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.text}>{titleText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#B6B6B6',
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
})

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#B6B6B6',
    alignItems: 'center',
    height: '12%',
  },
})

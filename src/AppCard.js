import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const AppCard = (props) => {
  return <View style={styles.default}>{props.children}</View>
}

const styles = StyleSheet.create({
  default: {
    padding: 20,

    width: '90%',
    marginBottom: 40,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF0000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: '#B6B6B6',
    borderRadius: 20,
    elevation: 15,
  },
})

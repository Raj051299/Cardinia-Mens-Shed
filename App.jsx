import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text></Text>
      <Text>HEllo World</Text>
      <Image 
      style={{width:400, height:300}}
      source={{ uri: "https://plus.unsplash.com/premium_photo-1741996431660-3736cb7e238b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />

    </View>
  )
}

export default App

const styles = StyleSheet.create({})
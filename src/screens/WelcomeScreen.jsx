import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Tiktok application</Text>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'transparent'
  }
})

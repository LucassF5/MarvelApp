import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity style={styles.voltar} onPress={()=>navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

styles = StyleSheet.create({
  voltar: {
    backgroundColor: 'blue',
    color: 'white'
  }
})
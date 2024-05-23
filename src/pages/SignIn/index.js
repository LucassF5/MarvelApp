import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

export default function Login() {
  const navigation = useNavigation()
  return (

    <ImageBackground source={require("../../assets/M.jpg")} resizeMode='cover' style={styles.image}>
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.8)']}
      >
        <View style={styles.container}>
          <Text style={styles.cadastro}>Cadastro de Usuário</Text>
          <Text style={{ color: "white", textAlign: "center", marginTop: "5%" }}>Complete com suas informações</Text>
          <View style={styles.form}>
            <Text
              style={styles.text}
            >Nome do usuário</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nome"
            />
            <Text
              style={styles.text}
            >Senha</Text>
            <TextInput
              style={styles.textInput}
              placeholder="* * * * * * * * "
            />
            <Text
              style={styles.text}
            >Confirmar Senha</Text>
            <TextInput
              style={styles.textInput}
              placeholder="* * * * * * * * "
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Welcome")}>
              <Text
                style={styles.buttonText}
              >Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  )
}

styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  cadastro: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: "18%"
  },
  form: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: "10%",
    marginTop: "10%"
  },
  text: {
    color: 'white',
    marginBottom: 5,
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: "3%"
  },
  textInput: {
    backgroundColor: 'white',
    width: "100%",
    height: 40,
    borderRadius: 5,
    marginBottom: "5%",
    paddingLeft: "3%",
    height: 55,
    fontSize: 18
  },
  button: {
    backgroundColor: 'white',
    width: "100%",
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "10%",
    height: "11%"
  },
  buttonText: {
    color: 'rgb(33, 21, 33)',
    fontSize: 23
  }
})
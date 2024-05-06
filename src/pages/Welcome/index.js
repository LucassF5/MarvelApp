import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>

      <Image source={require("../../assets/BM.jpg")} style={styles.image} />

      <Animatable.View animation="fadeInUp" delay={500} style={styles.form}>
        <Text style={styles.welcome}>Bem vindo(a)</Text>

        <View style={styles.formData}>
          <Image source={require("../../assets/User.png")} />
          <TextInput
            style={styles.titleText}
            placeholder={"Nome de usuário"}
          />
        </View>

        <View style={styles.formData}>
          <Image source={require("../../assets/PassW.png")} />
          <TextInput
            style={styles.titleText}
            placeholder={"Digite sua senha"}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
          >
          <Text style={styles.buttonText}>
            ENTRAR
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.registerText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>

        <View style={styles.icons}>
          <Image source={require("../../assets/I-man.png")} />
          <Image source={require("../../assets/M-icon.png")} />
          <Image source={require("../../assets/S-man.png")} />
        </View>

      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  image: {
    flex: 3
  },
  form: {
    flex: 5,
    marginBottom: "10%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#FFF",
    width: "80%",
    alignItems: "center"
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "8%",
    // marginBottom: "10%",
    color: "rgb(236,19,51)"
  },
  formData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: "5%"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    // borderBottomColor: "rgba(236,19,51,0.9)",
    marginBottom: "10%",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 40,
    paddingHorizontal: 20,
    paddingVertical: "2%",
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "rgb(236,19,51)",
    padding: "5%",
    borderRadius: 10,
    width: "60%",
    alignItems: "center",
    marginBottom: "4%",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 15
  },
  registerText: {
    color: "#606060",
    fontSize: 15
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: "10%"
  }
})

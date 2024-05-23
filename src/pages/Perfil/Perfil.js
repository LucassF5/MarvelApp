import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default function Perfil({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <ImageBackground source={require("../../assets/BM.jpg")} resizeMode='cover' style={styles.imgBG}>
        <Text style={{ color: "red", fontSize: 30, marginTop: 40, fontWeight: "bold" }}>Página de Perfil</Text>

        <View style={styles.viewPerfil}>
          <Text style={styles.imgText}>Stark</Text>
          <Image source={require("../../assets/TT.jpeg")} style={styles.image} />
        </View>

        <TouchableOpacity
        style={styles.button}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.buttonText}>Logout</Text>
          <Image source={require("../../assets/logout.png")} style={{ height: 30, width:30 }}/>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "black"
  },
  viewPerfil: {
    backgroundColor: "rgba(100,100,100,0.3)",
    width: "90%",
    height: 220,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    paddingBottom: 30
  },
  imgBG: {
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  imgText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center'
  },
  image: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 100
  },
  button: {
    backgroundColor: "red",
    width: "80%",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, 
    marginTop: 300,
    flexDirection: "row",
    justifyContent: "center",
    gap: 15
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  }
})
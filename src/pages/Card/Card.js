import { View, Text, Image, StyleSheet, ImageBackground, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import ListComics from './ListComics/ListComics'

const Card = ({ route, navigation }) => {
  const [character, setCharacter] = useState(route.params.name)
  const [description, setDescription] = useState(route.params.description)
  const [image, setImage] = useState(`${route.params.thumbnail.path}.${route.params.thumbnail.extension}`)
  const [comics, setComics] = useState(route.params.comics.items)
  console.log(route.params)


  // useEffect(() => {
  //   setCharacter(route.params.name)
  //   setDescription(route.params.description)
  //   setImage(`${route.params.thumbnail.path}.${route.params.thumbnail.extension}`)
  // }, [route.params])

  return (
    <ImageBackground source={require("../../assets/Marvel.jpg")} resizeMode='cover' style={styles.container}>
      <View >
        <LinearGradient style={{ padding: 20, borderRadius: 10, width: '90%', flex: 1, justifyContent: 'center', alignItems: 'center'}}
          colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0.9)']}>
          <Text style={styles.name}>{character}</Text>
          <Image source={{ uri: image }} style={{ width: "100%", aspectRatio: 1 }} />
          <View>
            <Text style={styles.description}>Description:{description}</Text>
          </View>
          <Text style={{ color: "red", fontSize: 20 }}>Comics:</Text>
          <ListComics comics={comics} />
        </LinearGradient>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 23,
    color: 'red',
    textAlign: 'center',
    // marginBottom: 15,
  },
  description: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: '500',
  },
})

export default Card
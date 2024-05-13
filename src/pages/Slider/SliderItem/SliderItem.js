import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('screen')

const SliderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image}
      resizeMode='contain'
      style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{item.nome}</Text>
        <Text style={styles.id}>{item.identidade}</Text>
      </View>
    </View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        flex: 0.6
    },
    content: {
        flex: 0.4,
        alignItems: 'center'
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 12
    },
    id: {
        fontSize: 24,
        color: '#333',
        marginVertical: 12
    }

})
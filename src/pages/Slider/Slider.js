import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import characters from "../../mocks/personagens"
import SliderItem from './SliderItem/SliderItem'

const Slider = () => {
    return (
        <View>
            <FlatList
                data={characters}
                renderItem={({ item }) => <SliderItem item={item} />}
                horizontal
                pagingEnabled
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({})
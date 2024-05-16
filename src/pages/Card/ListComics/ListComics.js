import { Text, FlatList } from 'react-native'
import React from 'react'

export default function ListComics(data) {

    return (
        <FlatList
            data={data.comics}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
                <Text style={{ fontSize: 15, marginVertical: 10 }}>{item.name}</Text>
            )}
        />
    )
}
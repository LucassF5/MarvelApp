import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, Image, Alert, ScrollView } from 'react-native';

import { getCharacters } from '../../services/requisicoes/characters';


export default function InitialRoute({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    async function characteres() {
        const resultado = await getCharacters()
        console.log(resultado)

        if (resultado) {
            setCharacters(resultado);
            setIsLoading(false);
        } else {
            Alert.alert("Não foi possível carregar os personagens.")
        }
    }

    useEffect(() => {

        characteres()

    }, []);

    return (
        <View style={styles.container}>

            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" /> // animação de carregamento
            ) : (
                <ScrollView style={{flex:1}}>
                    <TouchableOpacity style={{ marginVertical: 30 }} onPress={() => navigation.goBack()}>
                        <Text
                            style={{ backgroundColor: "red", textAlign: "center", padding: 10, fontSize: 16 }}
                        >Voltar</Text>
                    </TouchableOpacity>

                    <FlatList
                        data={characters}
                        numColumns={2}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.characterContainer}>
                                <Text style={styles.name}>{item.name}</Text>
                                {/* <Text style={styles.description}>{item.description || 'Sem descrição disponível'}</Text> */}
                                <Image source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} style={{ width: "70%", aspectRatio: 1 }} />
                            </View>
                        )}
                    />
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a2a2a',
        // padding: 10,
    },
    characterContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        // margin: 10,
        alignItems: 'center',
        aspectRatio: 1,
        width: '41.5%',
        borderRadius: 10,
        // margin: 3,
        backgroundColor: '#f5fcff',
        margin: 10,
        marginLeft: 20,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
    },
});
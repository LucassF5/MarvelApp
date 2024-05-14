import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, StatusBar, StyleSheet, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';

import Slider from '../Slider/Slider'
import { getCharacters } from '../../services/requisicoes/characters';


export default function InitialRoute({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    async function characteres() { //função para chamar o GET ed caracteres
        const resultado = await getCharacters()
        console.log(resultado)

        if (resultado) {
            setCharacters(resultado);
            setIsLoading(false);
            console.log("DEU CERTO\n")
            // console.log(resultado);
        } else {
            Alert.alert("Não deu certo")
        }
    }

    useEffect(() => {

        characteres() // renderizando os objetos junto com a montagem do componente

    }, []);

    return (
        <View style={styles.container}>

            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" /> // animação de carregamento
            ) : (
                <View>
                    <TouchableOpacity style={{ marginVertical: 30 }} onPress={() => navigation.goBack()}>
                        <Text
                            style={{ backgroundColor: "red", textAlign: "center", padding: 10, fontSize: 16 }}
                        >Voltar</Text>
                    </TouchableOpacity>

                    <FlatList
                        data={characters}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.characterContainer}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.description}>{item.description || 'Sem descrição disponível'}</Text>
                                <Image source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} style={{ width: 100, height: 100 }} />
                            </View>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        padding: 10,
    },
    characterContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
    },
});
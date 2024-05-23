import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, Image, Alert, ScrollView, ImageBackground } from 'react-native';

import { getCharacters } from '../../services/requisicoes/characters';


export default function InitialRoute({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [limit, setLimit] = useState(10);

    async function characteres() {
        const resultado = await getCharacters(limit)

        if (resultado) {
            setCharacters(resultado);
            setIsLoading(false);
        } else {
            Alert.alert("Não foi possível carregar os personagens.")
        }
    }

    useEffect(() => {

        characteres()

    }, [limit]);

    return (
        <View style={styles.container}>

            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" /> // animação de carregamento
            ) : (
                <View style={{ flex: 1 }}>

                    <Text style={styles.choiceText}>Quantos personagens deseja visualizar?</Text>
                    <Text style={{ fontSize: 14, color: "#faa", textAlign: "center" }}>
                        Limite de 100 nesse modo
                    </Text>
                    <View style={styles.choiceButton}>
                        <TouchableOpacity
                            style={styles.choiceBox}
                            onPress={() => setLimit(10) && characteres() && console.log(limit)}
                        >
                            <Text style={{ color: "white", textAlign: "center" }}>10</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.choiceBox}
                            onPress={() => setLimit(50) && characteres() && console.log(limit)}
                        >
                            <Text style={{ color: "white", textAlign: "center" }}>50</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.choiceBox}
                            onPress={() => setLimit(100) && characteres() && console.log(limit)}
                        >
                            <Text style={{ color: "white", textAlign: "center" }}>100</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={characters}
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.characterContainer}
                                onPress={() => navigation.navigate('Card', { ...item })}
                            >
                                <Text style={styles.name}>{item.name}</Text>
                                <Image
                                    source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                                    style={{ width: "70%", aspectRatio: 1 }}
                                />
                            </TouchableOpacity>
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
        backgroundColor: '#000',
    },
    choiceText: {
        color: '#fff',
        fontSize: 20,
        margin: 5,
        textAlign: 'center',
    },
    choiceButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
    },
    choiceBox: {
        backgroundColor: "#fa3737",
        padding: 10,
        margin: 10,
        width: 80,
        borderRadius: 15,
    },
    characterContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        aspectRatio: 1,
        width: '41.5%',
        borderRadius: 10,
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
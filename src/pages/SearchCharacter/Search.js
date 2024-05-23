import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


import { getCharacterByName } from '../../services/requisicoes/characters'

export default function Search({ navigation }) {
    const [name, setName] = useState('')
    const [character, setCharacter] = useState([])

    async function busca() {
        const resultado = await getCharacterByName(name)
        console.log(resultado)

        setName("") // Limpa nome de usuário após busca

        if (resultado) {
            setName(resultado) // Caso encontre o usuário vai ser setado e puxar suas informações
            setCharacter(resultado);
        } else {
            Alert.alert("Usuário não encontrado") // Caso não encontre vai retornar um alerta
            setName("") // Se já estivesse logado de um usuário vai zerar
        }
    }

    return (
        <ImageBackground source={require("../../assets/M2.jpg")} resizeMode='cover' style={styles.container}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.8)']}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <TextInput
                    style={styles.busca}
                    placeholder="Digite o nome do personagem"
                    placeholderTextColor="#ff0000"
                    value={name}
                    maxLength={20}
                    onChangeText={setName}
                />
                <TouchableOpacity
                    onPress={busca}
                    activeOpacity={0.7}

                    style={styles.button}>
                    <Text style={styles.text}>
                        BUSCAR
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: "white", fontSize: 12, fontWeight: "bold", marginBottom: 5 }}>
                    *Obs: os nomes precisam ser em inglês
                </Text>

                <FlatList
                    data={character}
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
            </LinearGradient>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    busca: {
        backgroundColor: "#000",
        color: "#ff0000",
        width: "80%",
        padding: 15,
        textAlign: "center",
        marginTop: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 4,
        borderColor: "red",
        fontWeight: "bold",
        fontSize: 20,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        width: "80%",
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 4,
        borderColor: "black",
        marginBottom: 5,
    },
    text: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
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
})
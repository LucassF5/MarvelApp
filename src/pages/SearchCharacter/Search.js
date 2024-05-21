import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'


import { getCharacterByName } from '../../services/requisicoes/characters'

export default function Search() {
    const [name, setName] = useState('')

    async function busca() {
        const resultado = await getCharacterByName(name)
        console.log(resultado)

        setName("") // Limpa nome de usuário após busca

        if (resultado) {
            setName(resultado) // Caso encontre o usuário vai ser setado e puxar suas informações

        } else {
            Alert.alert("Usuário não encontrado") // Caso não encontre vai retornar um alerta
            setName("") // Se já estivesse logado de um usuário vai zerar
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput
                    style={styles.busca}
                    placeholder="Digite o nome do personagem"
                    value={name}
                    onChangeText={setName}
                />
                <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.text}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    search:{
        backgroundColor: "black",
        padding: "3%",
        marginTop: 20
    },
    busca: {
        backgroundColor: "#5a5a5a",
        color: "#000"
    },
    button:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray"
    }
})
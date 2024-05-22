import api from '../api'

// 'https://gateway.marvel.com:443/v1/public/characters?apikey=e184a7c7a12b356caeb1fed10b4c5c26&hash=d00ffa62ad5826a547c10f5aad993ce4&ts=1715016875&limit=10'

export const getCharacters = async (limit) => {
    // Retorna um array de personagens em ordem alfabética
    try {
        const response = await api.get(`/characters?apikey=e184a7c7a12b356caeb1fed10b4c5c26&hash=d00ffa62ad5826a547c10f5aad993ce4&ts=1715016875&limit=${limit}`)
        // console.log(response)
        return response.data.data.results
    } catch (error) {
        console.error('Erro ao buscar personagens:', error)
        return {}
    }
}

export const getCharacterByName = async (name) => {
    // Retorna um personagem específico
    try {
        const response = await api.get(`/characters?nameStartsWith=${name}&apikey=e184a7c7a12b356caeb1fed10b4c5c26&hash=d00ffa62ad5826a547c10f5aad993ce4&ts=1715016875`)
        console.log(response)
        return response.data.data.results
    } catch (error) {
        // console.error('Erro ao buscar personagem:', error)
        return {"Error": "Personagem não encontrado"}   
    }
}


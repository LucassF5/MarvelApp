import api from '../api'

export const getCharacters = async () => {
    try {
        const response = await api.get('/characters?apikey=e184a7c7a12b356caeb1fed10b4c5c26&hash=d00ffa62ad5826a547c10f5aad993ce4&ts=1715016875')
        return response.data
    } catch (error) {
        console.error(error)
    }
}
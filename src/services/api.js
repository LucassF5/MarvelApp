import axios from 'axios'

// 'https://gateway.marvel.com:443/v1/public/characters?apikey=e184a7c7a12b356caeb1fed10b4c5c26&hash=d00ffa62ad5826a547c10f5aad993ce4&ts=1715016875&limit=10'
url = "https://gateway.marvel.com:443/v1/public"

const api = axios.create({
    baseURL: url
})

export default api
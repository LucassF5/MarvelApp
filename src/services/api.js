import axios from 'axios'

url = "https://gateway.marvel.com:443/v1/public"

const api = axios.create({
    baseURL: url
})

export default api
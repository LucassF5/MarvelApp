import axios from 'axios'
import { ts, apikey, hash } from "./useapi"

url = "https://gateway.marvel.com:443/v1/public"

const api = axios.create({
    baseURL: url
})

export default api
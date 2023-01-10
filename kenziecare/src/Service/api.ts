import axios from "axios"

export const api = axios.create({
    baseURL: "https://kenziecare-api.onrender.com",
    timeout: 5000
})
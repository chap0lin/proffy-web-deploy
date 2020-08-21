import axios from 'axios'

const api = axios.create({
    baseURL: 'https://chap0lin-proffy-nlw2-server.herokuapp.com/'
})

export default api;
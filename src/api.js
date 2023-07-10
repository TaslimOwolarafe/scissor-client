import axios from 'axios';

var baseUrl = process.env.REACT_APP_BASE_URL
const api = axios.create({
    baseURL: (baseUrl === undefined)?"https://scissor-mqx7.onrender.com":baseUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
      },
})

export default api;
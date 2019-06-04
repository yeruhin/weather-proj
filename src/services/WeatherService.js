import axios from 'axios'

const API_KEY = '6dab74a8c4f794cbd4e2b2064d21da17'

function getWeatherByCity(cityName) {
    if (Number(cityName) || !cityName) return Promise.reject()
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`)
        .then(res => res.data)
        .catch(err => console.error(err))
}


export default {
    getWeatherByCity,
} 
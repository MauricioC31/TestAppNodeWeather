const axios = require('axios');

const getWeather = async(lat, lng) => {

    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8b32c5ba01e8fe7f065a098f231e489c`)

    if (res.data.code === 400) {
        throw new Error(`Not data found for latitud: ${lat} and longitud: ${lng} `)
    }
    return res.data.main.temp;
}

module.exports = {
    getWeather
}
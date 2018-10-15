const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        description: 'Address of the city for get weather',
        demand: true
    }
}).argv;

//Type Async return a promise
const getInfo = async(direction) => {
    try {
        let coords = await place.getLugarLatLng(direction);
        let temp = await weather.getWeather(coords.lat, coords.lng);

        return `The weather in ${coords.direction} is ${temp}`
    } catch (e) {
        console.log(`The weather is not avalaible for ${direction}... try again please`);
    }
}

getInfo(argv.direction)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

// let places = place.getLugarLatLng(argv.direction)
//     .then(res => {
//         console.log('Direction: ', res.direction);
//         console.log('Latitud: ', res.lat);
//         console.log('Longitud: ', res.lng);
//     })
//     .catch(err => {
//         console.log('Error: ', err);
//     });

// weather.getWeather(-31.42, -64.18)
//     .then(temp => {
//         console.log('Temperature: ', temp);
//     })
//     .catch(err => {
//         console.log('Error: ', err);
//     });
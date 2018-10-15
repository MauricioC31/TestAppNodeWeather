const axios = require('axios');
const request = require('request');


const getLugarLatLng = async(direction) => {
    let encoded = encodeURI(direction);

    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`Not data found for ${direction} `)
    }
    let address = res.data.results[0];
    let coords = address.geometry.location;
    return {
        direction: address.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }

};

module.exports = {
    getLugarLatLng
}




// console.log('===========================');

// request(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`, function(error, response, body) {
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });
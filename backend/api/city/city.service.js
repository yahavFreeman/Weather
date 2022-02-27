const axios = require("axios")
module.exports={
    getCityByName
};

async function getCityByName(name){
    return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=a809b0bd97fb42c487c162253222302&q=${name}&days=1&aqi=no&alerts=no
    `).then(res => {
        return res.data})
}
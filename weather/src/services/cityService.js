const axios = require("axios");


export async function setCity(city){
    console.log(city)
    try{
        const weather= await axios.get('//localhost:3030/api/city/'+city)
        return weather.data
    }catch(err){
        console.log(err)
        alert(err,'Invalid city name')
    }

}
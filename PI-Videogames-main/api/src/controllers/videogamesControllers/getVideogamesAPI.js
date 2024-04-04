const axios = require('axios');
require('dotenv').config
const { API_KEY, URL } = process.env;

const getVideogamesAPI = async(name) => {
    const data = await axios.get(`${URL}/games?key=${API_KEY}`)
    const { results } = data.data 
    const infoAPI = results.map((videogame)=>{
        return{
            id: videogame.id,
            name: videogame.name,
            description: videogame.description,
            platforms: videogame.platforms.map((platform)=>platform.platform.name),
            image:videogame.background_image,
            released:videogame.released,
            rating:videogame.rating,
            genres:videogame.genres.map((obj)=>{
                return{
                    id: obj.id,
                    name: obj.name
                }
            })
        }
    })
    if(!name) return infoAPI 
    else return infoAPI.filter(videogame => videogame.name.toLowerCase().includes(name.toLowerCase()));
}

module.exports = getVideogamesAPI



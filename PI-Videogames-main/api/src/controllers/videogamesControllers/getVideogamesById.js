const axios = require('axios')
require('dotenv').config
const { API_KEY, URL } = process.env;
const { Videogame, Genres } = require ('../../db')

const getVideogameById = async (id, source) => {
    if(source === 'api'){
        const dataAPI = await axios.get(`${URL}/games/${id}?key=${API_KEY}`)
        const data = await dataAPI.data

        const dataFiltrada = {
            id:data.id,
            name:data.name,
            description:data.description,
            platforms:data.platforms.map((platform) => platform.platform.name),
            image:data.image,
            released:data.released,
            rating:data.rating,
            genres:data.genres.map((genre)=>{
                return{
                    id:genre.id,
                    name:genre.name,
                }
            }),
        }
        return dataFiltrada
    }else{
        const dataDB = await Videogame.findOne({
            where: {id: id},
            include:{
                model: Genres,
                attributes: ['name'],
                through: { attributes: []}
            }
        })
        return dataDB
    }
}

module.exports = getVideogameById
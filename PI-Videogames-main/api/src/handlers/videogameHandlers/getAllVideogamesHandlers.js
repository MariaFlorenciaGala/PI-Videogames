//CONTROLLERS
const getVideoGamesAPI = require('../../controllers/videogamesControllers/getVideogamesAPI')
const getVideoGamesDB = require('../../controllers/videogamesControllers/getVideogamesDB')

const getAllVideogameHandlers = async(req, res) => {
    try{
        const { name } = req.query
        
        const videoGamesDB = await getVideoGamesDB(name)
        const videoGamesAPI = await getVideoGamesAPI(name)
        const allVideoGames = {...videoGamesAPI,...videoGamesDB}
        if(allVideoGames.length !== 0) console.log(`El videojuego: ${name},ha tenido coincidencias`)
        else console.log(`El videojuego: ${name}, no se encuentra en nuestra base de datos`)
        res.status(200).json(allVideoGames);
    } catch(error){
        console.log('No se encontró ningúna coincidencia')
        res.status(400).json({error: error.message})
    }
}
 module.exports = getAllVideogameHandlers
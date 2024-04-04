//CONTROLLERS
const getVideogamesAPI = require('../../controllers/videogamesControllers/getVideogamesAPI')
const getVideogamesDB = require('../../controllers/videogamesControllers/getVideogamesDB')

const getVideogameHandlers = async(req, res) => {
    try{
        const { name } = req.query
        
        const videoGamesDB = await getVideogamesDB(name)
        const videoGamesAPI = await getVideogamesAPI(name)
        const allVideoGames = [...videoGamesAPI,...videoGamesDB]
        res.status(200).json(allVideoGames);
        if(name)console.log(`El videojuego: ${name},ha tenido coincidencias`)

    } catch(error){
        console.log('No se encontró ningúna coincidencia')
        res.status(400).json({error: error.message})
    }
}
 module.exports = getVideogameHandlers
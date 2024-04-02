//CONTROLLERS
const getVideogamesAPI = require('../../controllers/videogamesControllers/getVideogamesAPI')
const getVideogamesDB = require('../../controllers/videogamesControllers/getVideogamesDB')

const getVideogameHandlers = async(req, res) => {
    try{
        const { name } = req.query
        
        const videoGamesDB = await getVideogamesDB(name)
        const videoGamesAPI = await getVideogamesAPI(name)
        const allVideoGames = {...videoGamesAPI,...videoGamesDB}
        if(allVideoGames.length === 1) 
            console.log(`El videojuego: ${name},ha tenido coincidencias`)
        if(allVideoGames.length !== 0) 
            console.log(`Todos los videojuegos han sido cargados exitosamente`)
        else console.log(`No hemos encontrado el videojuego ${name}`)
        res.status(200).json(allVideoGames);
    } catch(error){
        console.log('No se encontró ningúna coincidencia')
        res.status(400).json({error: error.message})
    }
}
 module.exports = getVideogameHandlers
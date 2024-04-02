//CONTROLLERS
const postNewVideogame = require('../../controllers/videoGamesControllers/postNewVideogame')

const  postNewVideoGamesHandlers = async(req, res) => {
    try{
        const  videogame  = req.body
        const response= await postNewVideogame(videogame)
        console.log(`Videogame creado con éxito`)
        res.status(200).json(response);
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = postNewVideoGamesHandlers
//CONTROLLERS
const postNewVideogame = require('../../controllers/videogamesControllers/postNewVideogame')

const  postNewVideogamesHandlers = async(req, res) => {
    try{
        const { name, description, platforms, image, released, rating, genres } = req.body
        const response= await postNewVideogame(name, description, platforms, image, released, rating, genres )
        console.log(`Videogame creado con éxito`)
        res.status(200).json(response);
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = postNewVideogamesHandlers
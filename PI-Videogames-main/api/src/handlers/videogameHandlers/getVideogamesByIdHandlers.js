//CONTROLLERS
const getVideogamesById = require('../../controllers/videoGamesControllers/getVideogamesById')

const getVideoGamesByIdHandlers = async(req, res) => {
    try{
        const { id } = req.params;
        const source = isNaN(id) ? 'db' : 'api';
        const response = await getVideogamesById(id, source);
        console.log(`Id:${id}, encontrado con éxito`)
        res.status(200).json(response)
    } catch(error){
        console.log('Id no se encontró')
        res.status(400).json({error: error.message})
    }
}
 module.exports = getVideoGamesByIdHandlers
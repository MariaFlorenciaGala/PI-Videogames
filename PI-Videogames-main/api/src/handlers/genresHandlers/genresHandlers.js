//CONTROLLERS
const { getGenresDB } = require('../../controllers/genresControllers/getGenresDB')
const { getGenresAPI } = require('../../controllers/genresControllers/getGenresAPI')

const getGenresHandlers = async(req, res) => {
    try{
        genresDB = await getGenresDB()
        genresAPI = await getGenresAPI()
        allGenres = [...genresAPI,...genresDB]

        res.status(200).json(allGenres);
        return allGenres
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = getGenresHandlers
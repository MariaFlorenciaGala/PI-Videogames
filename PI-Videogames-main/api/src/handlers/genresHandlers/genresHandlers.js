//CONTROLLERS
const { getGenresDB } = require('../../controllers/genresControllers/getGenresDB')
const { getGenresAPI } = require('../../controllers/genresControllers/getGenresAPI')

const getGenresHandlers = async(req, res) => {
    try{
        genresAPI = await getGenresAPI()
        genresDB = await getGenresDB(genresAPI)
        res.status(200).json(genresDB);
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = getGenresHandlers
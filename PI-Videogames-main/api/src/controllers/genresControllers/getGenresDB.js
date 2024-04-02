const { API_KEY , URL} = process.env;
const { Genres } = require('../../db')

//https://api.rawg.io/api/genres?key=6ee850ff9922471a9e679372fda9b60e
//https://api.rawg.io/api/genres?key=

const getGenresDB = async() => {  
    const genresDB  = await Genres.findAll();
    return genresDB
};
    
module.exports = {
    getGenresDB
}
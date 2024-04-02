const axios = require('axios')
const { API_KEY , URL} = process.env;

//https://api.rawg.io/api/genres?key=6ee850ff9922471a9e679372fda9b60e
//https://api.rawg.io/api/genres?key=


const getGenresAPI = async() => {
    const { data } = await axios.get(`https://api.rawg.io/api/genres?key=6ee850ff9922471a9e679372fda9b60e`);
    const genresApi = data.results.map((genres)=>genres.name)
    return genresApi
}

module.exports = {
    getGenresAPI,
}
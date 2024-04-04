const axios = require('axios')
const { API_KEY , URL} = process.env;

//https://api.rawg.io/api/genres?key=6ee850ff9922471a9e679372fda9b60e
//https://api.rawg.io/api/genres?key=


const getGenresAPI = async() => {
    const infoAPI = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data;
    const {results} = infoAPI;
    const allGenresAPIFiltrados = results.map((obj) => {
        return {
            id: obj.id,
            name: obj.name,
        };
    });
    return allGenresAPIFiltrados;
}

module.exports = {
    getGenresAPI,
}
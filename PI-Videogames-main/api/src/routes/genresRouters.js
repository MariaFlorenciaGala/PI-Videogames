const { Router } = require('express')

//HANDLERS
const getGenresHandlers = require('../handlers/genresHandlers/genresHandlers')

const genresRouters = Router();

genresRouters.get('',getGenresHandlers)

module.exports = genresRouters;


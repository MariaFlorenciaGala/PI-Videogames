const { Router } = require('express');
const videoGamesRouters = Router();

//HANDLERS
const getAllVideoGameHandlers = require('../handlers/videoGamesHandlers/getAllVideoGamesHandlers')
const getVideoGamesByIdHandlers = require('../handlers/videoGamesHandlers/getVideoGamesByIdHandlers')
const postNewVideoGamesHandlers = require('../handlers/videoGamesHandlers/postNewVideoGamesHandlers')


videoGamesRouters.get('',getAllVideoGameHandlers)
videoGamesRouters.get('/name',getAllVideoGameHandlers)
videoGamesRouters.get('/:id',getVideoGamesByIdHandlers)
videoGamesRouters.post('',postNewVideoGamesHandlers)

module.exports = videoGamesRouters
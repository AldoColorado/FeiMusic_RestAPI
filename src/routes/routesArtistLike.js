const express = require('express');
const routerArtistLike = express.Router();
const controller = require('../controller/artistLikeDAO');
const verifyToken = require('./middlewares');

routerArtistLike.get('/ArtistLike/:idConsumidor', controller.getArtistLike);
routerArtistLike.post('/ArtistLike', controller.createArtistLike);

module.exports = routerArtistLike;
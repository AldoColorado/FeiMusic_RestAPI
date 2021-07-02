const express = require('express');
const routerArtistLike = express.Router();
const controller = require('../controller/artistLikeDAO');
const verifyToken = require('../middlewares/checkToken');

routerArtistLike.get('/ArtistLike/:idConsumidor', controller.getArtistLike);
routerArtistLike.post('/ArtistLike', controller.createArtistLike);
routerArtistLike.put('/ArtistLike', controller.deleteArtistaLike)

module.exports = routerArtistLike;
const express = require('express');
const routerAlbumLike = express.Router();
const controller = require('../controller/albumLikeDAO');
const verifyToken = require('./middlewares');

routerAlbumLike.get('/AlbumLike/:idConsumidor', controller.getAlbumLike);
routerAlbumLike.post('/AlbumLike', controller.createAlbumLike);

module.exports = routerAlbumLike;
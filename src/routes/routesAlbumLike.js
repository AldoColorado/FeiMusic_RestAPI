const express = require('express');
const routerAlbumLike = express.Router();
const controller = require('../controller/albumLikeDAO');
const verifyToken = require('../middlewares/checkToken');

routerAlbumLike.get('/AlbumLike/:idConsumidor', controller.getAlbumLike);
routerAlbumLike.post('/AlbumLike', controller.createAlbumLike);
routerAlbumLike.put('/AlbumLike', controller.deleteAlbumLike);

module.exports = routerAlbumLike;
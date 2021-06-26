const express = require('express');
const routerSongLike = express.Router();
const controller = require('../controller/songLikeDAO');
const verifyToken = require('../middlewares/checkToken');

routerSongLike.get('/SongLike/:idConsumidor', controller.getSongLike);
routerSongLike.post('/SongLike', controller.createSongLike);

module.exports = routerSongLike;
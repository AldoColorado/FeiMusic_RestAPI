const express = require('express');
const routerAlbum = express.Router();
const controller = require("../controller/albumDAO");

routerAlbum.get('/Album', controller.getAlbums);
routerAlbum.get('/Album/:nombreAlbum', controller.getAlbum);
routerAlbum.get('/Album/:idArtista', controller.getAlbumByArtista);
routerAlbum.post('/Album', controller.createAlbum);
routerAlbum.delete('/Album/:idAlbum', controller.deleteAlbum);
routerAlbum.put('/Album/:idAlbum', controller.updateAlbum);


module.exports = routerAlbum;
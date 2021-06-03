const express = require('express');
const routerArtista = express.Router();
const controller = require("../controller/artistaDAO");

routerArtista.get('/Artista', controller.getArtistas);
routerArtista.get('/Artista/:idArtista', controller.getArtista);
routerArtista.post('/Artista', controller.createArtista);
routerArtista.delete('/Artista/:idArtista', controller.deleteArtista);
routerArtista.put('/Artista/:idArtista', controller.updateArtista);


module.exports = routerArtista;
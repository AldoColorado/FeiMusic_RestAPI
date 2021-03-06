const express = require('express');
const routerArtista = express.Router();
const controller = require("../controller/artistaDAO");

routerArtista.get('/Artista', controller.getArtistas);
routerArtista.get('/Artista/:username', controller.getArtista);
routerArtista.get('/Artista/Nombre/:nombreArtista', controller.getArtistaByNombre);
routerArtista.post('/Artista', controller.createArtista);
routerArtista.delete('/Artista/:username', controller.deleteArtista);
routerArtista.put('/Artista/:username', controller.updateArtista);


module.exports = routerArtista;
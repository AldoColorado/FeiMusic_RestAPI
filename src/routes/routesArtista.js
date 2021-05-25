const express = require('express');
const router = express.Router();
const controller = require("../controller/artistaDAO");

router.get('/Artista', controller.getArtistas);
router.get('/Artista/:idArtista', controller.getArtista);
router.post('/Artista', controller.createArtista);
router.delete('/Artista/:idArtista', controller.deleteArtista);
router.put('/Artista/:idArtista', controller.updateArtista);


module.exports = router;
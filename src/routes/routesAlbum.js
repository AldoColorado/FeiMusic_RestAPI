const express = require('express');
const router = express.Router();
const controller = require("../controller/albumDAO");


router.get('/Album', controller.getAlbums);
router.get('/Album/:idAlbum', controller.getAlbum);
router.post('/Album', controller.createAlbum);
router.delete('/Album/:idAlbum', controller.deleteAlbum);
router.put('/Album/:idAlbum', controller.updateAlbum);


module.exports = router;
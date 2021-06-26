const express = require('express');
const routerAlbum = express.Router();
const controller = require("../controller/uploadFile");
const Multer = require('multer');
const path = require('path');

const {Storage} = require('@google-cloud/storage');

const googleCloud = new Storage({
    keyFilename: path.join(__dirname, '.../config/potent-zodiac-317804-cd3169b565c0.json'),
    projectId: 'potent-zodiac-317804'
});

const multer = Multer({
    storage: Multer.memoryStorage(),
})


routerAlbum.post('/File', multer.single("archivo"), controller.uploadArchivo);

module.exports = routerAlbum;
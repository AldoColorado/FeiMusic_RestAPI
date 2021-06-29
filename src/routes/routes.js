const express = require('express');
const routesCuenta = require('../routes/routesCuenta');
const routesArtista = require('./routesArtista');
const routesConsumidor = require('./routesConsumidor');
const routesAlbum = require('./routesAlbum');
const routesAuth = require('./routesAuth');
const routesCancion = require('./routesCancion')
const routesSongLike = require('./routesSongLike');
const routesAlbumLike = require('./routesAlbumLike');
const routesArtistLike = require('./routesArtistLike');
const routesFiles = require('./routesFiles');
const routesGenero = require('./routesGenero');
const routesEmailer = require('./routesEmailer');

module.exports = {
    routesCuenta : routesCuenta,
    routesArtista : routesArtista,
    routesConsumidor : routesConsumidor,
    routesAlbum : routesAlbum,
    routesAuth : routesAuth,
    routesCancion : routesCancion,
    routesSongLike : routesSongLike,
    routesAlbumLike : routesAlbumLike,
    routesArtistLike : routesArtistLike,
    routesFiles: routesFiles,
    routesGenero: routesGenero,
    routesEmailer: routesEmailer
}
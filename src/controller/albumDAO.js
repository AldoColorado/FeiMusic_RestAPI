const express = require('express');
const database = require("../models")

module.exports = {
    async getAlbums(req, res) {
        return database.Album.findAll().then(albumes => res.send(albumes));
    },

    async getAlbum(req, res) {
        return database.Album.findOne({
            where: {
                nombreAlbum : req.params.nombreAlbum
            }
        }).then(album => {
            if(album == null){
                res.sendStatus(404)
            }else{
                res.status(200).send(album)
            }
        });
    },

    async getAlbumByArtista(req, res) {
        return database.Album.findAll({
            where: {
                idArtista : req.params.idArtista
            }
        }).then(album => {
            if(album.length == 0){
                res.sendStatus(404)
            }else{
                res.status(200).send(album)
            }
            }
        );
    },

    async createAlbum(req, res) {
        return database.Album.create({
            idAlbum: req.body.idAlbum,
            nombreAlbum: req.body.nombreAlbum,
            anioLanzamiento: req.body.anioLanzamiento,
            imagenAlbum: req.body.imagenAlbum,
            idArtista: req.body.idArtista
        }).then(submitedAlbum => res.status(200).send(submitedAlbum));
    },

    async deleteAlbum(req, res) {
        return database.Album.destroy({
            where: {
                nombreAlbum: req.params.nombreAlbum
            }
        }).then(() => res.sendStatus(200));
    },

    async updateAlbum(req, res) {
        return database.Album.update({
            nombreAlbum: req.body.nombreAlbum,
            anioLanzamiento: req.body.anioLanzamiento,
            imagenAlbum: req.body.imagenAlbum
        }, {
            where: {
                nombreAlbum: req.params.nombreAlbum
            }
        }).then(() => res.sendStatus(200));
    }
}
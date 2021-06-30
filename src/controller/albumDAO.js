const express = require('express');
const database = require("../models")

module.exports = {
    async getAlbums(req, res) {
        return database.Album.findAll().then(albumes => res.send(albumes));
    },

    async getAlbum(req, res) {
        return database.Album.findOne({
            where: {
                idAlbum : req.params.idAlbum
            }
        }).then(album => res.send(album));
    },

    async getAlbumByArtista(req, res) {
        return database.Album.findAll({
            where: {
                idArtista : req.params.idArtista
            }
        }).then(album => res.send(album));
    },

    async createAlbum(req, res) {
        return database.Album.create({
            idAlbum: req.body.idAlbum,
            nombreAlbum: req.body.nombreAlbum,
            anioLanzamiento: req.body.anioLanzamiento,
            imagenAlbum: req.body.imagenAlbum
        }).then(submitedAlbum => res.send(submitedAlbum));
    },

    async deleteAlbum(req, res) {
        return database.Album.destroy({
            where: {
                idAlbum: req.params.idAlbum
            }
        }).then(() => res.send("Deleted Album"));
    },

    async updateAlbum(req, res) {
        return database.Album.update({
            nombreAlbum: req.body.nombreAlbum,
            anioLanzamiento: req.body.anioLanzamiento,
            imagenAlbum: req.body.imagenAlbum
        }, {
            where: {
                idAlbum: req.params.idAlbum
            }
        }).then(() => res.send("Updated Album"));
    }
}
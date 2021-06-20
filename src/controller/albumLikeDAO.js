const express = require('express');
const database = require("../models")


module.exports = {
    
    async getAlbumLike(req, res) {
        return database.AlbumLike.findAll({
            where: {
                idConsumidor : req.params.idConsumidor
            }
        }).then(albumLike => res.send(albumLike));
    },

    async createAlbumLike(req, res) {
        return database.AlbumLike.create({
            idAlbum: req.body.idAlbum,
            idConsumidor: req.body.idConsumidor
        }).then(submitedAlbumLike => res.send(submitedAlbumLike));
    }


}


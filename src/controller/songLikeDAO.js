const express = require('express');
const database = require("../models")


module.exports = {
    
    async getSongLike(req, res) {
        return database.SongLike.findAll({
            include: {
                model: database.Cancion,
                attributes: ['idCancion', 'nombreCancion']
            },
            where: {
                idConsumidor : req.params.idConsumidor
            }
        }).then(songsLike => res.send(songsLike));
    },

    async createSongLike(req, res) {
        return database.SongLike.create({
            idCancion: req.body.idCancion,
            idConsumidor: req.body.idConsumidor
        }).then(submitedSongLike => res.send(submitedSongLike));
    }


}


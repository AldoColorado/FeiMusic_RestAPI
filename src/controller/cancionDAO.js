const express = require('express');
const database = require("../models")

module.exports = {

    async getCanciones(req, res) {
        return database.Cancion.findAll().then(canciones => res.send(canciones));
    },

    async getCancion(req, res) {
        return database.Cancion.findOne({
            where: {
                idCancion : req.params.idCancion
            }
        }).then(cancion => {
            if(cancion == null){
                return res.json({
                    status: "Not found"
                })
            }else{
                return res.json({
                    idCancion : cancion.idCancion,
                    nombreCancion: cancion.nombreCancion,
                    //imagenCancion: cancion.imagenCancion,
                    track: cancion.track
                });
            }
        });
    },

    async createCancion(req, res) {
            return database.Cancion.create({
                idCancion: req.body.idCancion,
                nombreCancion: req.body.nombreCancion,
                letra: req.body.letra,
                imagenCancion: req.body.imagenCancion,
                track: req.body.track,
                idAlbum: req.body.idAlbum,
                idGenero: req.body.idGenero
            }).then(submitedCancion => res.json({
                idCancion: submitedCancion.idCancion,
                nombreCancion: submitedCancion.nombreCancion
            }));
    },
}
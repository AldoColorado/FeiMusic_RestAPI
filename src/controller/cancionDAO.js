const express = require('express');
const database = require("../models")

module.exports = {

    async getCanciones(req, res) {
        return database.Cancion.findAll({
            attributes: ['idCancion', 'nombreCancion', 'imagenCancion']
        }).then(canciones => res.send(canciones))
    },

    async getCancion(req, res) {
        return database.Cancion.findOne({
            attributes: ['idCancion', 'nombreCancion'],
            where: {
                idCancion : req.params.idCancion
            }
        }).then(cancion => {
            if(cancion == null){
                return res.json({
                    status: "Not found"
                })
            }else{
                return res.send(cancion);
            }
        });
    },

    async buscarCancion(req, res) {
        return database.Cancion.findAll({
            attributes: ['idCancion', 'nombreCancion'],
            where: {
                nombreCancion : req.params.nombreCancion
            }
        }).then(canciones => {
            if(canciones == null){
                return res.json({
                    status: "Not found"
                })
            }else{
                return res.send(canciones)
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
const express = require('express');
const database = require("../models")


module.exports = {
    
    async getAlbumLike(req, res) {
        return database.AlbumLike.findAll({
            attributes: ['idAlbum'],
            include: {
                 model: database.Album,
                 attributes: ['nombreAlbum', 'imagenAlbum', 'anioLanzamiento', 'idAlbum']  
            },
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
    },

    async deleteAlbumLike(req,res) {
        return database.AlbumLike.destroy({where: 
            {idAlbum: req.body.idAlbum,
            idConsumidor: req.body.idConsumidor }
        }).then(albumlike => {
            if(!albumlike){
                res.sendStatus(404);
            }else{
                res.sendStatus(200)
            }     
        })
    }

}


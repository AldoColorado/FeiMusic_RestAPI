const express = require('express');
const database = require("../models");



module.exports = {
    async getListasCancion(req, res) {
        return database.ListaCancion.findAll().then(listasCancion => res.status(200).send(listasCancion)); 
    },

    async createListaCancion(req, res) {
        return database.ListaCancion.create(req.body).then(listaCancion => res.send(listaCancion));
    },

    async deleteListaCancion(req,res) {
        return database.ListaCancion.destroy({where: 
            {idListaReproduccion: req.body.idListaReproduccion,
            idCancion: req.body.idCancion  }
        }).then(lista => {
            if(!lista){
                res.sendStatus(404);
            }else{
                res.sendStatus(200)
            }     
        })
    }
}
const express = require('express');
const database = require("../models")

module.exports = {
    async getConsumidores(req, res) {
        return database.Consumidor.findAll().then(consumidores => {
            if(!consumidores){
                res.sendStatus(404);
            }else{
                res.send(consumidores);
            }
        })  
    },

    async getConsumidor(req, res) {
        return database.Consumidor.findOne({
            where: {
                username : req.params.username
            }
        }).then(consumidor => {
            if(consumidor == null){
                return res.json({
                    status: 'Not found'
                });
            }else{
                return res.json({
                    idConsumidor: consumidor.idConsumidor,
                    nombre: consumidor.nombre,
                    apellidos: consumidor.apellidos,
                    username: consumidor.username,
                    status: "Success"
                });
            }
        })
    },

    async createConsumidor(req, res) {
        return database.Consumidor.create({
            idConsumidor: req.body.idConsumidor,
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            username: req.body.username
        }).then(submitedConsumidor => res.send(submitedConsumidor));
    },

    async deleteConsumidor(req, res) {
        return database.Consumidor.destroy({
            where: {
                username: req.params.username
            }
        }).then(() => res.send("Deleted Consumidor"));
    },

    async updateConsumidor(req, res) {
        return database.Consumidor.update({
            idConsumidor: req.body.idConsumidor,
            nombre: req.body.nombre,
            apellidos: req.body.apellidos
        }, {
            where: {
                idConsumidor: req.params.idConsumidor
            }
        }).then(() => res.send("Updated Consumidor"));
    }
}
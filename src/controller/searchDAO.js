const express = require('express');
const database = require("../models");

module.exports = {

    async createSearch(req, res) {
        return database.Search.create(req.body)
        .then(submitedSearch => res.sendStatus(200));
    },

    async buscarSearch(req, res) {
        return database.Search.findAll({
            where: {
                nombreRecurso : req.params.nombreRecurso
            }
        }).then(recursos => {
            if(recursos == null){
                return res.sendStatus(404);
            }else{
                return res.send(recursos)
            }
        });
    },


}
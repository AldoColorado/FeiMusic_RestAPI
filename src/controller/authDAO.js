const database = require("../models");
const cuentaDAO = require("./cuentaDAO");
const bcrypt = require('bcryptjs');
const token = require('../utils/token');

module.exports = {
    async login(req, res) {
        database.Cuenta.findOne({where: 
            {username: req.body.username}
        }).then(cuenta => {
            if(!cuenta.username || !cuenta.password){
                return res.json({
                    error: true,
                    message: 'Username or passw.'
                });
            }else{
                const contraseniaCorrecta = bcrypt.compareSync(req.body.password, cuenta.password, 10);
                if(contraseniaCorrecta){  
                    return res.json({succes: token(cuenta)})     
                }else{
                    return res.json({
                        error: true,
                        message: 'Username or password is wrong.'
                    })
                }
            }
        })
    }  
}
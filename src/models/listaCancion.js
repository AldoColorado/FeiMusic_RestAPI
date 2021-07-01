const Sequelize  = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const ListaCancion = sequelize.define("ListaCancion", {
        idCancion: {
            type: Sequelize.BIGINT,
        },
        idListaReproduccion: {
            type: Sequelize.BIGINT
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return ListaCancion;
}
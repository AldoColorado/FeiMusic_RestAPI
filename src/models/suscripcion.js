const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Suscripcion = sequelize.define("Suscripcion", {
        idSuscripcion: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tipo: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        fechaInicio: {
            type: Sequelize.DATE
        },
        fechaFin: {
            type: Sequelize.DATE
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return Suscripcion;
}
const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Search = sequelize.define("Search", {
        idSearch: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tipoRecurso: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        nombreRecurso: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        imagenRecurso: {
            type: Sequelize.STRING(250),
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });
    return Search;
}
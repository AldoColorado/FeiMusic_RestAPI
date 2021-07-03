const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Album = sequelize.define("Album", {
        idAlbum: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            alloNull: false
        },
        nombreAlbum: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        anioLanzamiento: {
            type: Sequelize.DATE
        },
        imagenAlbum: {
            type: Sequelize.STRING(200)
        },
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return Album;
}

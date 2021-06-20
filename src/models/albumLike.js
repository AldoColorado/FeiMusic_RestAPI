const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const AlbumLike = sequelize.define("AlbumLike", {
        idAlbum: {
            type: Sequelize.BIGINT,
        },
        idConsumidor: {
            type: Sequelize.BIGINT
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return AlbumLike;
}
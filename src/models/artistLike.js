const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const ArtistLike = sequelize.define("ArtistLike", {
        idArtista: {
            type: Sequelize.BIGINT,
        },
        idConsumidor: {
            type: Sequelize.BIGINT
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return ArtistLike;
}
const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const SongLike = sequelize.define("SongLike", {
        idCancion: {
            type: Sequelize.BIGINT,
        },
        idConsumidor: {
            type: Sequelize.BIGINT
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    return SongLike;
}
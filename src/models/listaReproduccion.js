const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const ListaReproduccion = sequelize.define("ListaReproduccion", {
        idListaReproduccion: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        nombre: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        imagenLista: {
            type: Sequelize.STRING(200),
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });
   
    // ListaReproduccion.associate = models =>{
    //     ListaReproduccion.belongsToMany(models.Cancion, {through: 'ListaCancion', foreignKey: 'idListaReproduccion', otherKey: 'idCancion'});
    // };

    return ListaReproduccion;
}

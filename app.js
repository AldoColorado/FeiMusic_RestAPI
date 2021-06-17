const express = require('express');
const db = require('./src/models');
require('./src/controller/associations');
const routes = require('./src/routes/routes');
const PORT = process.env.PORT || 4000;
const verifyToken = require('./src/routes/middlewares');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: "50mb", parameterLimit: 500000000 }));

app.use('/feimusic', routes.routesCuenta);
app.use('/feimusic', routes.routesConsumidor);
app.use('/feimusic', routes.routesArtista);
app.use('/feimusic', routes.routesConsumidor);
app.use('/feimusic', routes.routesAuth);
app.use('/feimusic', routes.routesCancion);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('listening on: http://localhost:4000');
    }); 
});

const express = require('express');
const db = require('./src/models');
const routes = require('./src/routes/routes');
const PORT = process.env.PORT || 4000;
const middleware = require('./src/routes/middlewares');


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes.routesCuenta);
app.use(routes.routesCuenta);
app.use(routes.routesArtista);
app.use(routes.routesConsumidor);
app.use(routes.routesAuth);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('listening on: http://localhost:4000');
    }); 
});

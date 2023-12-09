const express = require('express');


const app = express();
const {  mongoConn } = require('./databases/configuration');
mongoConn()

const cors = require('cors');

const tiposProyecto = require('./routes/tipoProyecto');

const proyectos = require('./routes/proyecto');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/api/tiposproyectos', tiposProyecto);
app.use('/api/proyectos', proyectos);

module.exports = app;
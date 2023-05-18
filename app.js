const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors');

const mongoose = require('mongoose');

const app = express();

const respuestasRoutes = require('./routes/respuestas');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/prueba')
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err));
// */
// Settings
app.set('port', process.env.port || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/respuestas', respuestasRoutes);

//app.use(require('./routes/todos'));


// Starting The Server
app.listen(app.get('port'), () => {
    console.log("server on port ", app.get('port'));
});
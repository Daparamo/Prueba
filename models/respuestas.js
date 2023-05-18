const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const respuestaSchema = new Schema({
    nombre: String,
    apellido: String,
})

module.exports = mongoose.model('respuestas', respuestaSchema);
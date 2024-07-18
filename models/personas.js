const mongoose = require('mongoose')
const schema = mongoose.Schema

const personaSchema = new mongoose.Schema({
    nombre: String,
    cedula: String,
    placa: String,
    tipoP: String,
    programas: String,
    fechaRegistro: Date,
    ciudad: String,
    estado: String
})

const Personas = mongoose.model('Personas', personaSchema)

module.exports = Personas
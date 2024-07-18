const mongoose = require('mongoose')
const schema = mongoose.Schema

const TramitesSchema = new mongoose.Schema({
   
    nombreConductor: String,
    cedula: String,
    placa: String,
    tipoTramite: String,
    programa: String,
    fechaRegistro: Date,
    ciudad: String,
    estado: String,
    fechaAprobacion: Date,
    fechaEvento: Date
})

const Tramites = mongoose.model('Tramites', TramitesSchema)

module.exports = Tramites
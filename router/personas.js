const express = require('express')
const router = express.Router()

const Personas = require('../models/personas')

router.get('/', async (req, res) => {
  try {
      const arrayPersonas = await Personas.find()
      res.render("personas/personas",{
          titulo: "Listado de todas las Personas",
          arrayPersonas: arrayPersonas
      })
  }catch (error) {
      console.log(error)
  }
})

router.get('/creacionp', async (request, response) => {
  response.render('personas/creacionp',{
      titulo: "Crear Persona"
  })
})

router.post('/', async (request, response) => {
  const body = request.body
  try {
    body.fechaRegistro = Date.now()
      await Personas.create(body);
      response.redirect('personas')
  }
  catch(error){
      console.log(error)
  }
})

router.get('/:id', async (request, response) => {
    const id = request.params.id
    try{
      const personasDB = await Personas.findOne({ _id: id })
      response.render('personas/modificarp',{
          titulo: "personas",
          persona: personasDB,
          error: false
      })
  }catch (error) {
      console.log(error)
      response.render('personas/personas',{
          titulo: "Modificar persona",
          mensaje: `No se encontró el id '<b>${id}</b>'`,
          error: true
      })
  }
})

router.put('/:id', async (request, response) => {
  const id = request.params.id
  const body = request.body
    console.log(id,body)
   try {
       const personasDB = await Personas.findByIdAndUpdate (
        id, body, { useFindandModify: false }
       )
       response.json({
          estado: true,
          mensaje:'editada'
       })

   }catch (error) {
       console.error(error)
       response.json({
        estado: true,
        mensaje:'error al modificar'
     })
   }
})

module.exports = router

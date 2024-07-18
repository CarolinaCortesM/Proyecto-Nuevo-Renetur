const express = require('express')
const router = express.Router()

const Tramites = require('../models/tramites')

router.get('/', async (req, res) => {
  try {
      const arrayTramite = await Tramites.find()
      console.log(arrayTramite)
      res.render("tramites/tramites",{
          titulo: "Listado de todas los tramites",
          arrayTramite: arrayTramite
      })
  }catch (error) {
      console.log(error)
  }
})

router.get('/retiro', async (request, response) => {
  response.render('tramites/diligenciarTramite',{
      tipo: "retiro"
  })
})

router.get('/ingreso', async (request, response) => {
    response.render('tramites/diligenciarTramite',{
        tipo: "ingreso"
    })
  })
 
//boton de guardar la informacion nueva
router.post('/', async (request, response) => {
  const body = request.body
  body.fechaRegistro= Date.now()
  body.estado = 'Borrador'
  try {
        console.log(body)
      await Tramites.create(body);
      response.redirect('tramites')
  }
  catch(error){
      console.log(error)
  }
})

router.get('/modificar/:id', async (request, response) => {
    const id = request.params.id
    try {
        const tramitesDB = await Tramites.findOne({ _id: id })
        response.render('tramites/modificarTramite',{
            titulo: "Modificar tramite",
            tramite: tramitesDB,
            error: false
        })
    }
    catch (error) {
        console.log(error)
        response.render('modificarTramite',{
            titulo: "Modificar tramite",
            mensaje: `No se encontró el id '<b>${id}</b>'`,
            error: true
        })
    }
})

//guaradar modificación
router.put('/:id', async (request, response) => {
  const id = request.params.id
  const body = request.body
    console.log(body)
   try {
       const TramitesDB = await Tramites.findByIdAndUpdate (
        id, body, { useFindandModify: false }
       )
       response.json({
          estado: true,
          mensaje: 'Realizado'
       })

   }catch (error) {
       console.error(error)

   }
})
        
module.exports = router
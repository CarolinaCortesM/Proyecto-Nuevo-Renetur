const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

const mongoose = require('mongoose')

const usuario = "vhd_carolina";
const password= "CWBZklCoaXURNKPi";
const dbname= "gestion_humana_nr";

const uri = `mongodb+srv://${usuario}:${password}@cluster0.vrq1yc6.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)
  .then(() => console.log('conectado a MongoDB'))
  .catch(e => console.log('Error de conexión a MongoDB: ', e))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'))

app.use('/', require('./router/rutasWeb'))
app.use('/tramites', require('./router/tramites'))
app.use('/personas', require('./router/personas'))
 
app.use((request, response, next) => {
  response.status(404).render('404.ejs', {
      titulo: 'Error 404',
      descripcion: 'Página no encontrada'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 

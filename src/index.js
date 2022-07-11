
const jwt = require('jsonwebtoken')
const passB = require('bcrypt')
const morgan = require ('morgan')
const cors = require ('cors')
const app = require ('./app')
const TOKEN_KEY = "randomString"
app.use(cors())


//const rutaProductos = require('./src/rutas/routerPartidas')

//Conectamos con la base de datos de MongoDB
const db = require('./controladores/database')
db.on('error', (error)=>{
  console.log('Error en la conexión de la base de datos' + error);
})
//Detectamos el evento connected cuando todo está ok
db.on('connected', ()=>{
  console.log('La base de datos está conectada !!!');
})
//Middleware par mostrar info de peticiones
app.use(morgan('combined'))



const r_usuarios = require('./rutas/rUsuarios')
app.use(morgan('combined'))
//app.use('/api/productos', rutaProductos)


app.get('/',(req,res)=>{
  res.send('Estas en la raiz de la api')
})

app.listen(8000,()=>{
    console.log('Servidor escuchando en puerto 8000')
})

app.use('/api/usuarios', r_usuarios)
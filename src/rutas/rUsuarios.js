const express = require('express')
const {leerUsuarios} = require('../controladores/cUsuarios')
const author = require('../middlewares/auth')
const rolex = require('../middlewares/rol')
const r_user = express.Router()


//ruta para admins
//r_user.get('/',author, rolex(['admin']), leerUsuarios)

module.exports = r_user
const express = require('express')
const {registerImage} = require('../controladores/cImagen')
const r_mascot = express.Router()



r_mascot.post('/',registerImage)

module.exports = r_mascot
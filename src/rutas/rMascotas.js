const express = require('express')
const {registerMascot,listMascot} = require('../controladores/cMascotas')
const auth = require('../middlewares/auth')
const rol = require('../middlewares/rol')

const r_mascot = express.Router()

r_mascot.post('/', auth, registerMascot)//, rol(['registrado','admin'])
//r_mascot.get('/',listMascot)
module.exports = r_mascot
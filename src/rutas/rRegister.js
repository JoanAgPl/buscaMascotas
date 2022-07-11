const express = require("express");
const registerController = require("../controladores/cRegister");
const auth = require('../middlewares/auth')
const rol = require('../middlewares/rol')
//ruta para todos
const apiReg = express.Router();



apiReg.post("/", registerController.register)

module.exports = apiReg
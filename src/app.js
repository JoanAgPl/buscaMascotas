const express = require("express");
const { register } = require("./controladores/cRegister");
const { login } = require("./controladores/login");
const { registerMascot, listMascot} = require("./controladores/cMascotas");
const {leerUsuarios} = require("./controladores/cUsuarios");
const auth = require('./middlewares/auth')
const rol = require('./middlewares/rol')

const r_mascotoo = express.Router()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Rutas base);




app.post("/api/registro", register)
app.post("/api/rMascotas", auth, registerMascot)
app.get("/api/rMascotas", listMascot)
app.get("/api/login", login)
app.get("/api/listaUsuarios", auth, rol['admin'], leerUsuarios)
module.exports = app;
//Import the mongoose module
const mongoose = require('mongoose');

//Codigo de conexion con la base de datos mongodb

const username = "JoanAgPl"
const password = "testPassword"
const cluster = "buscamascotascluster.6lmr9"
const dbname = "buscaMascotas"
const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
//const uri = "mongodb+srv://JoanAgPl:testPassword@cluster0.6lmr9.mongodb.net/gestorPartidas?retryWrites=true&w=majority";

//Creamos conexión
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
//Get the default connection
var db = mongoose.connection;

//exportamos la conexión
module.exports = db


//------
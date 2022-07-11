//localhost:8000/api/registro?userName=JoanAgPl&password=TestPassword&email=aguayoplanelljoan@fpllefia.com

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mUser = require('../modelos/mUsuarios');
const { token } = require("morgan");
async function register(req, res) {
    console.log(req.query.userName+" "+req.query.email+" "+req.query.password)
    newUser = new mUser ({
      userName : req.query.userName,
      email : req.query.email,
      password : await bcrypt.hash(req.query.password, 10),
      roles : "Registrado"
    })
    try {
      if(!(newUser.userName && newUser.email && newUser.password)) {
        return res.status(400).send("No estan todos los datos")
      }
      const userStore = await newUser.save()
      if(!userStore) {res.status(400).send({ msg: "No se ha guardado el usuario" })
      } else {
        
    console.log("registro sigue funcionando");
        res.status(200).send({ newUser});
      }
  } catch (err) {
    console.log(err);
  }
    
}
module.exports = {
  register
};

/*



*/
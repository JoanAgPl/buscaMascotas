//localhost:8000/api/login?userName=JoanAgPl&password=TestPassword
const SECRET = 'palabraSecreta'
const mongooseClient = require("mongodb")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mUser = require('../modelos/mUsuarios');
const dbs = require('../controladores/database')
async function login (req, res){
  regUser = new mUser ({
    userName : req.query.userName,
    email : "empty@gmail.com",
    password : req.query.password,
    roles : "Registrado"
  })
  try {
    console.log(req.query.userName)
    const foundUser = await mUser.findOne({"user":regUser.userName})
    console.log(foundUser)
    const temp = bcrypt.compareSync(regUser.password,foundUser.password)
    console.log(temp)
    if(temp){
      const ntoken = jwt.sign({
        data:{
          userID: foundUser._id,
          userName: foundUser.userName,
          password: foundUser.roles
        }
      },//datos que queremos encriptar
      SECRET,
      {expiresIn:15*60})

    res.json({
      ntoken,
      mensaje:'ok'
    })

  } else {
    res.json({
      mensaje:'contraseña incorrecta'
    })
  }
  } catch (error) {
    res.json({
      error: error,
      mensaje: 'usuario no encontrado'
    })
  }

}
module.exports = {
  login
};
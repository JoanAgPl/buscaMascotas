const jwt = require('jsonwebtoken')
const m_user = require('../modelos/mUsuarios')
const auth = (req,res,next)=>{
    try {
    const token = req.headers.authorization.split(' ')[1]
    const tokenVerificado = jwt.verify(token,'palabraSecreta')
    console.log(tokenVerificado)
    const foundUser = m_user.findById(tokenVerificado.data.userID)
    req.query.userID=tokenVerificado.data.userID
    req.query.roles=tokenVerificado.data.roles
    next()
    } catch(error){
        res.status.json(500)({
            error: error,
            mensaje: "el token no es valido"
        })
    }
}
module.exports = auth
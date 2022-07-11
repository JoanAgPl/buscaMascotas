const jwt = require('jsonwebtoken')
const BD = require('../controladores/database')
const mUserd = require('../modelos/mUsuarios')

const rol = (arrayRoles)=>{
    return ((req,res,next)=>{
        req.query.roles.forEach(rol => {
            var permiso = false
            //recorremos roles de usuario
            req.query.roles.forEach(rol => {
                //si uno de estos roles esta dentro de los roles del endpoint
                if(arrayRoles.includes(rol)){
                    console.log('tiene permisos')
                    permiso = true
                }
            });
            //si ha encontrado un rol con permiso pasa a c_usuarios
            if(permiso){
                next()
            }
            else{
                res.status(400).json({
                    mensaje: 'No tienes el rol necesario'
                })
            }
        });      
        next()
    })
}

module.exports = rol
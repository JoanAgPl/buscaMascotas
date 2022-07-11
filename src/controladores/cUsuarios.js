
const mUser= require('../modelos/mUsuarios');
    //leer todos los usuarios
    async function leerUsuarios(req,res){
        mUser.get('/all-users', (req,res)=>{
            mUser.find()
               .then((result)=>{
                  return res.send(result)
               })
               .catch((errorL)=>{
                  return console.log(errorL)
               })
          })
    }

        module.exports = {
            leerUsuarios
          };
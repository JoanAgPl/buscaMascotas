//localhost:8000/api/registro?userName=JoanAgPl&password=TestPassword&email=aguayoplanelljoan@fpllefia.com

const mMascot = require('../modelos/mMascotas');
async function registerMascot(req, res) {
    console.log(req.query.description+req.query.mascotName)
    newMascot = new mMascot ({
      mascotName : req.query.mascotName,
      description : req.query.description
    })
    
    try {
      if(!(newMascot.mascotName && newMascot.description)) {
        return res.status(400).send("No estan todos los detes")
      }
      const mascotStore = await newMascot.save()
      if(!mascotStore) {res.status(400).send({ msg: "No se ha guardado la mascota" })
      } else {
        
    console.log("registro sigue funcionando");
        res.status(200).send({ newMascot});
      }
  } catch (err) {
    console.log(err);
  }
}

async function listMascot(req, res){
  
}

module.exports = {
  registerMascot, listMascot
};
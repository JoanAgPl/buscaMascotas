const mMascot = require('../modelos/mMascotas');
async function getMascotId(req,res){
  const result = mMascot.findById(req.query.id)
  if(result){
    return res.status(400).send(result)
    
  } else {
     return res.status(400).send("No se ha encontrado mascota")
}
}



async function updateMascotId(req,res){
  const result = mMascot.findById(req.query.id)
  if(result){    
    updateMascot = new mMascot (result)
    if(req.query.mascotName) 
      mMascot.mascotName=req.query.mascotName
    
    if(req.query.mascotName) 
      mMascot.description=req.query.description
    
    const mascotUpdate = await updateMascot.save()
    res.status(200).send({ mascotUpdate});
  } else {
     return res.status(400).send("No se ha encontrado mascota")
}
}
async function deleteMascotId(req,res){
  const result = mMascot.findById(req.query.id)
  if(result){
    mMascot.deleteOne(result)
    
  } else {
     return res.status(400).send("No se ha encontrado mascota")
}
}
module.exports = {
  getMascotId,updateMascotId,deleteMascotId
};
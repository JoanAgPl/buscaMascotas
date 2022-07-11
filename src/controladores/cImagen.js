//localhost:8000/api/registro?userName=JoanAgPl&password=TestPassword&email=aguayoplanelljoan@fpllefia.com

const fs = require('fs-extra')
const multer = require('multer')
async function registerImage(req, res) {
  
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'archivos/')
    },
    filename:  (req, file, cb)=> {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[1])
    }
})

//Creamos el objeto multer con la ubicación y nombre (storage)
var upload = multer({ storage: storage })
//Creamos la ruta usando upload.single como middleware
app.post('/files', upload.single('file'), (req, res)=> {
   try {
        res.json({
            mensaje: 'OK',
            nombreArchivo: req.file.originalname
        })
   } catch (error) {
    res.json({
        mensaje: 'error',error
    })
   }      
})

// *********** fs_extra **************************/

app.delete('/files/:file', async (req, res)=> {
    try {
        const file = req.params.file
        await fs.remove('archivos/'+file)
        console.log('success!')
         res.json({
             mensaje: 'OK '+file+' ha sido borrado'
         })
    } catch (error) {
     res.json({
         mensaje: 'error',error
     })
    }      
 })
}
module.exports = {
  registerImage
};
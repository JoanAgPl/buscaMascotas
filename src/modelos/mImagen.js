const mongoose = require("mongoose")

//vue abre ventana para seleccionar foto
//

const schema = mongoose.Schema
const userSchema = new schema({
    mascotName:{//v-model
        type: String,
        required: true
    },
    description:{//v-model
        type: String,
        required: true
    },
    file:{//enviarle el url de la imagen, nombre_archivo
        type: String,
        required: true
    }
})
const mMascot = mongoose.model("Mascots", userSchema)
module.exports = mMascot 


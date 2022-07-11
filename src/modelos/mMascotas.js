const mongoose = require("mongoose")
const schema = mongoose.Schema
const userSchema = new schema({
    mascotName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})
const mMascot = mongoose.model("Mascots", userSchema)
module.exports = mMascot 


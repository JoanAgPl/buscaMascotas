

const mongoose = require("mongoose")
const schemas = mongoose.Schema
const userSchemas = new schemas({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    roles:{
        type: String,
        required: true
    }
})
const mUser = mongoose.model("Users", userSchemas)
module.exports = mUser 
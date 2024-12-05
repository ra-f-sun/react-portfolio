const mongoose = require("mongoose")
const {Schema} =mongoose

const serviceSchema = new Schema({
    icon: String,
    title: String,
    bodyText: String,
})

module.exports=mongoose.model("Service", serviceSchema)
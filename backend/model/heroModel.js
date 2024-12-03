const mongoose =require ('mongoose')
const {Schema} = mongoose

const heroSchema=new Schema({
    subHeading: String,
    heading: String,
    bodyText: String,
    buttonText: String,
    image: String,

})

module.exports = mongoose.model("Hero", heroSchema)
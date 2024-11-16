const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email: {
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
    },
    company: {
        type:String
    },
    jobTitle: {
        type:String
    }
},{timestamps:true})

const Contact = mongoose.model('Contact',ContactSchema)
module.exports = Contact
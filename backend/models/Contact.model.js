const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        default:'N/A'
    },
    lastName:{
        type:String,
        default:'N/A'
    },
    email: {
        type:String,
        required:true,
        default:'N/A'
    },
    phoneNumber:{
        type:String,
        default:'N/A'
    },
    company: {
        type:String,
        default:'N/A'
    },
    jobTitle: {
        type:String,
        default:'N/A'
    }
},{timestamps:true})

const Contact = mongoose.model('Contact',ContactSchema)
module.exports = Contact
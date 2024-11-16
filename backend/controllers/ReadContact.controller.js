const Contact = require("../models/Contact.model")

async function ReadContact(req,res) {
    try {
      const ContactList = await Contact.find()
      res.status(200).send(ContactList)  
    } catch (error) {
        res.status(500).send({message:'Error Fetching Contacts! Please Contact Admin!'})
    }
}


module.exports = ReadContact
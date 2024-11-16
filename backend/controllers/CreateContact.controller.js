const Contact = require('../models/Contact.model')

async function CreateContact(req,res) {
    const {firstName,lastName,email,phoneNumber,company,jobTitle} = req.body
    try {
        const newContact = new Contact({
            firstName,
            lastName,
            email,
            phoneNumber,
            company,
            jobTitle
        })
        await newContact.save()
        res.status(200).send({message:'Saved New Contact!'})
    } catch (error) {
        res.status(500).send({message:'Error Saving Contact! Kindly Contact Admin!'})
    }
}


module.exports = CreateContact
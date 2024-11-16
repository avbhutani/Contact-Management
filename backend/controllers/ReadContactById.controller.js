const Contact = require('../models/Contact.model')

async function ReadContactById(req,res) {
    const id = req.params.id
    try {
        const ContactById = Contact.findOne({_id:id})
        res.status(200).send(ContactById)
    } catch (error) {
        res.status(500).send({message:'Cannot Read Contact By Id.'})
    }
}

module.exports = ReadContactById
const Contact = require('../models/Contact.model')

async function DeleteContact(req,res) {
    const id = req.params.id
    if(!id) {
        res.status(400).send({message:'Id Cannot be Empty!'})
    }
    try {
        await Contact.deleteOne({_id:id})
        res.status(200).send({message:'Deleted Contact Successfully!'})
    } catch (error) {
        res.status(500).send({message:'Error Deleting Contact! Please Contact Admin!'})
    }
}


module.exports = DeleteContact
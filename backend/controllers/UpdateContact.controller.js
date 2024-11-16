const Contact = require("../models/Contact.model")

async function UpdateContact(req,res) {
    try {
        const id = req.params.id; 
        const updateData = req.body;
        const updatedContact = await Contact.findByIdAndUpdate(
            id, 
            updateData, 
            { new: true, runValidators: true } 
        );

        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({ message: 'Contact updated successfully', data: updatedContact });
    } catch (error) {
        res.status(500).json({ message: 'Error updating contact', error: error.message });
    }
}


module.exports = UpdateContact
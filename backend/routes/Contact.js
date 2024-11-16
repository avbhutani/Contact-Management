const express = require('express')
const Contact = express()
const CreateContact = require('../controllers/CreateContact')
const ReadContact = require('../controllers/ReadContact')
const UpdateContact = require('../controllers/UpdateContact')
const DeleteContact = require('../controllers/DeleteContact')

Contact.post('/contacts',CreateContact)
Contact.get('/contacts',ReadContact)
Contact.put('/contacts/:id',UpdateContact)
Contact.delete('/contacts/:id',DeleteContact)

module.exports = Contact
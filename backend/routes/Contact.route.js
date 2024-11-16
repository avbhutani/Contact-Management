const express = require('express')
const ContactRoute = express()

const CreateContact = require('../controllers/CreateContact.controller')
const ReadContact = require('../controllers/ReadContact.controller')
const UpdateContact = require('../controllers/UpdateContact.controller')
const DeleteContact = require('../controllers/DeleteContact.controller')

ContactRoute.post('/contacts',CreateContact)
ContactRoute.get('/contacts',ReadContact)
ContactRoute.put('/contacts/:id',UpdateContact)
ContactRoute.delete('/contacts/:id',DeleteContact)

module.exports = ContactRoute
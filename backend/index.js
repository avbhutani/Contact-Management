const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const ContactRoute = require('./routes/Contact.route')

require('dotenv').config()
require('./db/Connect')

app.use(cors())
app.use(bodyParser.json())
app.use(ContactRoute)

app.listen(process.env.PORT || 4000,()=> {
    console.log(`Server is listening on ${process.env.PORT || 4000}`)
})
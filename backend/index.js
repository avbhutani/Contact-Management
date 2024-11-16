const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

app.listen(process.env.PORT || 4000,()=> {
    console.log(`Server is listening on ${process.env.PORT || 4000}`)
})
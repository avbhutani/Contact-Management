const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGO_URI}`)
.then(()=> {
    console.log('Connected to the Database.')
})
.catch((err)=> {
    console.log(`Error Connecting to the Database ${err}`)
})
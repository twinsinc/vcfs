const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/vcfs', { useNewUrlParser: true})
    .then(() =>{
        console.log('connected')
    })

    .catch(err =>{
        console.log(err)
    })
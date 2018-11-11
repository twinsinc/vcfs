const mongoose = require('mongoose')

const WitnessSchema = new mongoose.Schema({
    name: String,
    statement: String
    
})

module.exports = mongoose.model('Suspect', WitnessSchema)

/* module.exports = class Witness{
    constructor(name, statement){
        this.name = name
        this.statement = statement
    }

    addTo(casefile){
        casefile.scenes.push(this)
    }

    static create({name, statement}){
        return new Witness(name, statement)
    }
} */
const mongoose = require('mongoose')

const EvidenceSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String
})

module.exports = mongoose.model('Evidence', EvidenceSchema)


/* 
module.exports = class Evidence{
    constructor(name, description, type){
        this.name = name
        this.description = description
        this.type = type
    }

    addTo(casefile){
        casefile.evidences.push(this)
    }

    static create({name, description, type}){
        return new Evidence(name, description, type)
    }
} */
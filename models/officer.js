const mongoose = require('mongoose')

const OfficerSchema = new mongoose.Schema({
    name: String,
    id: Number,
    access: String,
    experience: Number
})

module.exports = mongoose.model('Officer', OfficerSchema)


/* 
module.exports = class Officer {
    constructor(name, id, access, experience){
        this.name = name
        this.id = id 
        this.access = access
        this.experience = experience
    }

    
    workOn(casefile){
        casefile.officers.push(this)
    }

    static create({name, id, access, experience}){
        return new Officer(name, id, access, experience)
    }

} */
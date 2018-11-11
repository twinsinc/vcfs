const mongoose = require('mongoose')

const CasefileSchema = new mongoose.Schema({
    name: String,
    id: Number,
    description: String,
    year: Number,
    status: String,
    officers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Officer'
    }],
    suspects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Officer'
    }],
    evidences: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Officer'
    }],
    witnesses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Officer'
    }]
})

module.exports = mongoose.model('Meetup', CasefileSchema);

/* 
module.exports = class Casefile {
    constructor(name, id, description, year, status){
        this.name = name
        this.id = id
        this.description = description
        this.year = year
        this.status = status
        this.officers = []
        this.suspects = []
        this.evidences = []
        this.witnesses = []
    }

    report(){
        console.log('Case file', this.name, 'with a description', this.description, 'from', this.year, 'has', this.evidences.length, 'evidences', 'and',
         this.suspects.length, 'suspects.', 'Currently', this.officers.length, 'officers are working on it.')
    }

    static create({name, id, description, year, status, officers, suspects, evidences, scenes}){
        const casefile = new Casefile(name, id, description, year, status, officers, suspects, evidences, scenes)
        casefile.officers = officers.map(Officer.create)
        casefile.suspects = suspects.map(Suspect.create)
        return bank
    }
} */


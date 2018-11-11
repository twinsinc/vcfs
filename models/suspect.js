const mongoose = require('mongoose')

const SuspectSchema = new mongoose.Schema({
    name: String,
    birthday: String,
    alibi: String,
    fingerprints: String,
    dna: String
    
})

module.exports = mongoose.model('Suspect', SuspectSchema)

/* module.exports = class Suspect{
    constructor(name, birthday, alibi, fingerprints, dna){
        this.name = name
        this.birthday = birthday
        this.alibi = alibi
        this.fingerprints = fingerprints
        this.dna = dna
    }

    addTo(casefile){
        casefile.suspects.push(this)
    }
} */
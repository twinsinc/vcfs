const fs = require('fs')

const EvidenceModel = require('../models/evidence')

const dbPath = `${__dirname}/../evidence-database.json`

async function findAll() {
    return EvidenceModel.find()
}

async function add(evidence) {
    return EvidenceModel.create(evidence)
}

async function del(evidenceId) {
    return EvidenceModel.remove({ _id: evidenceI})
}

async function find(evidenceId) {
    return EvidenceModel.findOne({ _id: evidenceId})
}

async function saveAll(evidences) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(evidences), (err, file) => {
            if (err) return reject(err)

            resolve()
        })
    })
}

module.exports = {
    findAll,
    find,
    add,
    del
}

const fs = require('fs')

const OfficerModel = require('../models/officer')

const dbPath = `${__dirname}/../officer-database.json`

async function findAll() {
    return OfficerModel.find()
}

async function add(officer) {
    return OfficerModel.create(officer)
}

async function del(officerId) {
    return OfficerModel.remove({ _id: officerI})
}

async function find(officerId) {
    return OfficerModel.findOne({ _id: officerId})
}

async function saveAll(officers) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(officers), (err, file) => {
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

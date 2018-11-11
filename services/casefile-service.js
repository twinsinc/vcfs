const CasefileModel = require('../models/casefile')
const OfficerModel = require('../models/officer')
const EvidenceModel = require('../models/evidence')

async function findAll() {
    return CasefileModel.find()
}

async function addOfficer(casefileId, officerId){
    const casefile = await CasefileModel.findOne({ _id: casefileId})
    const officer = await OfficerModel.findOne({ _id: officerId})
    casefile.officers.push(officer)
    await casefile.save()
    return casefile
}

async function add(officer) {
    return CasefileModel.create(officer)
}

async function del(_id) {
    return CasefileModel.remove({ _id })
}

async function find(_id) {
    return CasefileModel.findOne({ _id })
}

module.exports = {
    findAll,
    find,
    add,
    del,
    addAttendee
}

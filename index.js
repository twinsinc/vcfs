const express = require('express')
const bodyParser = require('body-parser')

const OfficerService = require('./services/officer-service')
const CasefileService = require('./services/casefile-service')
const EvidenceService = require('./services/evidence-service')

const app = express()

require('./mongo-connection.js')

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

/**
  * @desc officer block
*/

app.get('/officer/all', async (req, res) => {
  const officers = await OfficerService.findAll()
  res.render('officer', { officers })
})

app.get('/officer/:id', async (req, res) => {
  const officer = await OfficerService.find(req.params.id)
  res.send(officer)
})

app.post('/officer', async (req, res) => {
  const officer = await OfficerService.add(req.body)
  res.send(officer)
})

app.delete('/officer/:id', async (req, res) => {
  const officer = await OfficerService.del(req.params.id)
  res.send(officer)
})

/**
  * @desc evidence block
*/

app.get('/evidence/all', async (req, res) => {
  const evidences = await EvidenceService.findAll()
  res.render('evidence', { evidences })
})

app.get('/evidence/:id', async (req, res) => {
  const evidence = await EvidenceService.find(req.params.id)
  res.send(evidence)
})

app.post('/evidence', async (req, res) => {
  const evidence = await EvidenceService.add(req.body)
  res.send(evidence)
})

app.delete('/evidence/:id', async (req, res) => {
  const evidence = await EvidenceService.del(req.params.id)
  res.send(evidence)
})

/**
  * @desc casefile block
*/

app.get('/casefile/all', async (req, res) => {
const casefiles = await CasefileService.findAll()
res.send(casefiles)
})

app.get('/casefile/:id', async (req, res) => {
  const casefile = await CasefileService.find(req.params.id)
  res.send(casefile)
})

app.post('/casefile', async (req, res) => {
  const casefile = await CasefileService.add(req.body)
  res.send(casefile)
})

app.post('/casefile/add-officer', async (req, res) => {
  const casefile = await CasefileService.add(req.body.casefileId, req.body.officerId)
  res.send(casefile)
})

app.post('/casefile/add-evidence', async (req, res) => {
    const casefile = await CasefileService.add(req.body.casefileId, req.body.evidenceId)
    res.send(casefile)
  })

app.delete('/casefile/:id', async (req, res) => {
  const casefile = await CasefileService.del(req.params.id)
  res.send(casefile)
})

app.listen(3000, () => {
  console.log('Server listening..')
})

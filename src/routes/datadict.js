import datadict from '../controllers/datadicts/index'
const express = require('express')
const router = express.Router()

router.get('/servers', (req, res) => {
  datadict.GetAllServer(req, res)
})
router.get('/servers/:id', (req, res) => {
  datadict.GetAllTableByServerId(req, res)
})
router.get('/:id', (req, res) => {
  datadict.GetDatadictByProjectId(req, res)
})
router.post('/:id/details', (req, res) => {
  datadict.PostDatadictDetail(req, res)
})
router.post('/', (req, res) => {
  datadict.PostDataDict(req, res)
})
router.put('/:id', (req, res) => {
  datadict.PutDataDict(req, res)
})
module.exports = router

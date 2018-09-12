import datadict from '../controllers/datadicts/index'
const express = require('express')
const router = express.Router()

router.get('/servers', (req, res) => {
  datadict.GetAllServer(req, res)
})
router.get('/servers/:id', (req, res) => {
  datadict.GetAllTableByServerId(req, res)
})
module.exports = router

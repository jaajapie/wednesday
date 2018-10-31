import datadict from '../controllers/datadicts/index'
const express = require('express')
const router = express.Router()

router.get('/engine-ai/webhook', (req, res) => {
  datadict.GetEnginWebHook(req, res)
})
router.post('/engine-ai/webhook', (req, res) => {
  datadict.EnginWebHook(req, res)
})
module.exports = router

const express = require('express')
const router = express.Router()
const login = require('../controllers/login/index')

router.post('/', async (req, res) => {
  let Id = await login.Login(req, res)
  res.json(Id)
})

module.exports = router

const express = require('express')
const router = express.Router()
const user = require('../controllers/users/index')

router.get('/', async (req, res) => {
  let users = await user.GetUsers(req, res)
  res.json(users)
})

router.post('/', async (req, res) => {
  let Id = await user.PostUsers(req, res)
  res.json(Id)
})

router.put('/:id', async (req, res) => {
  res.json([])
})

router.delete('/:id', async (req, res) => {
  res.json([])
})

module.exports = router

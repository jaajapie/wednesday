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
  let result = await user.PutUsers(req, res)
  res.json(result)
})

router.delete('/:id', async (req, res) => {
  let result = await user.DeleteUsers(req, res)
  res.json(result)
})

module.exports = router

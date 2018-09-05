import user from '../controllers/users/index'

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  let users = await user.GetUsers(req, res)
  res.json(users)
})

router.post('/', async (req, res) => {
  res.json([])
})

router.put('/:id', async (req, res) => {
  res.json([])
})

router.delete('/:id', async (req, res) => {
  res.json([])
})

const express = require('express')
const router = express.Router()
const project = require('../controllers/projects/index')

router.get('/', async (req, res) => {
  let users = await project.GetProjects(req, res)
  res.json(users)
})

router.post('/', async (req, res) => {
  let Id = await project.PostProject(req, res)
  res.json(Id)
})

router.put('/:id', async (req, res) => {
  res.json([])
})

router.delete('/:id', async (req, res) => {
  res.json([])
})

module.exports = router

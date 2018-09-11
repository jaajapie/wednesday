import project from '../controllers/projects/index'
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  await project.GetProjects(req, res)
})
router.get('/:id', async (req, res) => {
  await project.GetProjectById(req, res)
})
router.post('/', async (req, res) => {
  await project.PostProject(req, res)
})

router.put('/:id', async (req, res) => {
  await project.PutProject(req, res)
})

router.delete('/:id', async (req, res) => {
  await project.DeleteProject(req, res)
})

module.exports = router

import pathfile from '../controllers/pathfiles/index'
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  await pathfile.GetPathFiles(req, res)
})
router.post('/', async (req, res) => {
  await pathfile.PostPathFile(req, res)
})
router.put('/:id', async (req, res) => {
  await pathfile.PutPathFile(req, res)
})
router.delete('/:id', async (req, res) => {
  await pathfile.DeletePathFile(req, res)
})

module.exports = router

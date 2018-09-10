const router = require('express').Router()
const ctrlTest = require('../controllers/test/index')

router.get('/getdata', async (req, res) => {
  let data = await ctrlTest.GetTests(req, res)
  res.json(data)
})

router.get('/getdataRaw:', async (req, res) => {
  let data = await ctrlTest.GetTestsQueryRaw(req, res)
  res.json(data)
})

router.get('/:id', async (req, res) => {
  let data = await ctrlTest.GetTestsId(req, res)
  console.log('data ==>', data)
  res.json(data)
})
// GetTestsQueryRaw
module.exports = router

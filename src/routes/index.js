const express = require('express')
const router = express.Router()
// config file
router.use('/users', require('./user'))
router.use('/test', require('./test'))

router.get('/', (req, res) => {
  res.send({
    status: true
  })
})

module.exports = router
const express = require('express')
const router = express.Router()
const jwt = require('../middlewares/jwt')
// config file
router.use('/users', require('./user'))
router.use('/test', require('./test'))
router.use('/login', require('./login'))

router.get('/', (req, res) => {
  res.send({
    folder: 'routes',
    status: true
  })
})

module.exports = router

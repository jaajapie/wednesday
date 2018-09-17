
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const cors =  require('./middlewares/cors')
const preflight =  require('./middlewares/preflight')

require('babel-polyfill')
require('babel-register')({
  presets: [ 'env' ]
})

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
const jwt = require('./middlewares/jwt')
const jwtAdmin = require('./middlewares/jwtAdmin')

app.use(express.json())
app.use('cors','preflight')
app.use('/api/login', require('./routes/login'))
app.use('/api/users', jwtAdmin, require('./routes/user'))
app.use('/api/projects', require('./routes/project'))
app.use('/api/datadict', require('./routes/datadict'))

const PORT = 5000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
module.exports = app

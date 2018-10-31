
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
// const jwt = require('./middlewares/jwt')
// const jwtAdmin = require('./middlewares/jwtAdmin')

app.use(express.json())
// app.use('cors', 'preflight')
// app.use('/api/login', require('./routes/login'))
// app.use('/api/users', jwtAdmin, require('./routes/user'))
// app.use('/api/projects', require('./routes/project'))
app.use('/', require('./routes/datadict'))

const port = process.env.PORT || 1337
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
module.exports = app

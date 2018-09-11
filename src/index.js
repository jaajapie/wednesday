const bodyParser = require('body-parser')
const express = require('express')
const cors = require('./middlewares/cors')
const prefilght = require('./middlewares/prefilght')
const jwt = require('./middlewares/jwt')

const app = express()
app.use(cors, prefilght)
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(express.json())
app.use('/api',jwt, require('./routes')) // ให้ route ไปที่ folder routes
app.use(require('./middlewares/404'))
const PORT = 5000

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

module.exports = app

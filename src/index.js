const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(express.json())

app.use('/api', require('./routes')) // ให้ route ไปที่ folder routes

const PORT = 5000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

module.exports = app

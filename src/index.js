import bodyParser from 'body-parser'
const express = require('express')
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(express.json())
app.use('/api/users', require('./routes/user.js'))

const PORT = 5000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

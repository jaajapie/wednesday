const bodyParser = require('body-parser')
const express = require('express')
const config = require('./data/config') // ไฟล์ config ที่เก็บ db
const sequelize = require('./lib/sequelize')(config[config.db]) // ทำการเรียกใช้ sequelize

app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(express.json())
app.set('sequelize', sequelize) // ฝากไว้กับตัว application

sequelize.authenticate().then(() => { // เทส connect db
  console.log('Connection has been established successfully.')
}).catch(err => {
  console.error('Unable to connect to the database:', err)
})

app.use('/api', require('./routes')) // ให้ route ไปที่ folder routes

const PORT = 5000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

module.exports = app

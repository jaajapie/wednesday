const bodyParser = require('body-parser')
const express = require('express')
app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(express.json())

const Sequelize = require('sequelize')
const options = {
  operatorsAliases: false
}
// const sequelize = new Sequelize('mysql://root@127.0.0.1/tutor4dev', options)
const sequelize = new Sequelize('mysql://aeroot@127.0.0.1:3306/test', options)
app.set('sequelize', sequelize) // ฝากไว้กับตัว application

// setup models
require('./models/test')()

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.use('/api/users', require('./routes/user'))
app.use('/api/test', require('./routes/test'))


const PORT = 5000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

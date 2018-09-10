const Sequelize = require('sequelize')
const sequelizeCon = require('../lib/sequelize') // ทำการเรียกใช้ sequelize

module.exports = () => {
  const fields = {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING
  }

  const options = {
    timestamps: false
  }

  sequelizeCon.define('user', fields, options)
}

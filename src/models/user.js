const Sequelize = require('sequelize')
const sequelizeCon = require('../lib/sequelize') // ทำการเรียกใช้ sequelize

module.exports = () => {
  const fields = {
    Id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userName: Sequelize.STRING,
    password: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
  }

  const options = {
    timestamps: false
  }

  sequelizeCon.define('test_user', fields, options)
}

const Sequelize = require('sequelize')
const sequelizeCon = require('../lib/sequelize') // ทำการเรียกใช้ sequelize

module.exports = () => {
  const fields = {
    Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userName: Sequelize.STRING,
    password: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    role: Sequelize.STRING,
    activeStatus: Sequelize.CHAR
  }

  const options = {
    timestamps: false
  }

  sequelizeCon.define('test_user', fields, options)
}

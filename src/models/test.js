const Sequelize = require('sequelize')
const sequelizeCon = require('../lib/sequelize') // ทำการเรียกใช้ sequelize

module.exports = () => {
  const fields = {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    test: Sequelize.STRING
  }

  const options = {
    timestamps: false
  }

  sequelizeCon.define('tests', fields, options)
}

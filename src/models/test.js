const Sequelize = require('sequelize')
// const sequelize = app.get('sequelize')
const config = require('../data/config') // ไฟล์ config ที่เก็บ db
const sequelize = require('../lib/sequelize')(config[config.db]) // ทำการเรียกใช้ sequelize

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

  sequelize.define('test', fields, options)
}

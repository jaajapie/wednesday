const Sequelize = require('sequelize')
const sequelize = app.get('sequelize')

module.exports = () => {
  const fields = {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    text: Sequelize.STRING,
  }

  const options = {
    timestamps: false
  }

  sequelize.define('test', fields, options)
}

const Sequelize = require('sequelize')
// const sequelize = new Sequelize('mssql://sa:password@192.168.0.2:1433/SILKSPAN', options)
module.exports = (config) => {
  const sequelize = new Sequelize(config.param.database, config.param.user, config.param.password, {
    host: config.param.host,
    dialect: config.driver,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    storage: `path/to/database.${config.driver}`
  })
  return sequelize
}

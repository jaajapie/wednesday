module.exports = {
  db: process.env.DOCKER || 'conn02',
  conn02: {
    driver: 'mssql',
    param: {
      host: '192.168.0.2',
      port: 1433,
      user: 'sa',
      password: 'password',
      database: 'SILKSPAN',
      connectionTimeout: 60000
    }
  }
  // conn02: {
  //   driver: 'mysql',
  //   param: {
  //     host: '127.0.0.1',
  //     port: 3306,
  //     user: 'aeroot',
  //     password: '',
  //     database: 'test',
  //     connectionTimeout: 60000
  //   }
  // },
}
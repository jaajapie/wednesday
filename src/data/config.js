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
  //   user: 'sa',
  //   password: 'password',
  //   server: '192.168.0.2',
  //   port: 1433,
  //   database: 'SILKSPAN',
  //   connectionTimeout: 60000
  // },
}
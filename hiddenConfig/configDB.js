export default {
  connDev02: {
    user: 'sa',
    password: 'password',
    server: '192.168.0.2',
    port: 1433,
    database: 'SILKSPAN',
    connectionTimeout: 60000
  },
  connProd30: {
    user: 'webapp',
    password: '5e5@Me',
    server: 'DBServer30',
    port: 1433,
    database: 'SILKSPAN',
    connectionTimeout: 60000
  },
  connProd03: {
    user: 'webapp',
    password: '5e5@Me',
    server: 'Server03',
    port: 1433,
    database: 'SILKSPAN03',
    connectionTimeout: 60000,
    requestTimeout: 60000,
    pool: {
      idleTimeoutMillis: 60000
    }
  },
  connOnline: {
    user: 'dotnet',
    password: '2cdM0n1t0r',
    server: '192.168.10.103',
    port: 1433,
    database: 'SILKSPAN',
    connectionTimeout: 60000
  },
  GetAllServer: function () {
    let data = []
    data.push({Id: 1, Name: '192.168.0.2: Silkspan', Conn: 'connDev02'})
    data.push({Id: 2, Name: 'DBServer30: Silkspan', Conn: 'connProd30'})
    data.push({Id: 3, Name: '192.168.10.103: Silkspan', Conn: 'connOnline'})
    data.push({Id: 4, Name: 'Server03: SILKSPAN03', Conn: 'connProd03'})
    return data
  },
  GetServerDetail: function (connName) {
    if (connName === 'connDev02') {
      return this.connDev02
    } else if (connName === 'connProd30') {
      return this.connProd30
    } else if (connName === 'connOnline') {
      return this.connOnline
    } else if (connName === 'connProd03') {
      return this.connProd03
    }
  }
}

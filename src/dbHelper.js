var sql = require('mssql')

export default {
  executeQueryAsync: async function (db, query) {
    const pool = new sql.ConnectionPool(db)
    pool.on('error', err => {
      console.log('sql errors', err)
    })
    try {
      await pool.connect()
      let result = await pool.request().query(query)
      return {result: result}
    } catch (err) {
      return {err: err}
    } finally {
      pool.close()
    }
  }
}

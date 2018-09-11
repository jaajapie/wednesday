import gConfig from '../../dbHelper.js'
import helper from '../../helper.js'

const modules = {
  GetAllTable: async function (param) {
    var query = `SELECT TABLE_NAME
                 FROM vmdbcenter.silkspan.INFORMATION_SCHEMA.TABLES; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  PostUsers: async function (param) {
    var query = `INSERT INTO [test_users]
                ([userName]
                ,[password]
                ,[role])
                 OUTPUT test_users.Id
                  VALUES
                (${helper.setDefaultParam(param.username, null)}
                ,${helper.setDefaultParam(param.password, null)}
                ,${helper.setDefaultParam(param.role, null)}); `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  PutUsers: async function (param) {
    var query = `UPDATE [test_users]
                 SET [userName] = ${helper.setDefaultParam(param.username, null)}
                    ,[password] = ${helper.setDefaultParam(param.password, null)}
                    ,[role] = ${helper.setDefaultParam(param.role, null)}
                 WHERE Id = ${helper.setDefaultParam(param.Id, null)}; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  DeleteUsers: async function (param) {
    var query = `DELETE FROM [test_users]
                 WHERE Id = ${helper.setDefaultParam(param.Id, null)}; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  }
}

module.exports = modules

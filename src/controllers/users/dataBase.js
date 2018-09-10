import gConfig from '../../dbHelper.js'
import helper from '../../helper'

const modules = {
  GetUsers: async function (param) {
    var query = `SELECT [Id]
                ,[userName]
                ,[password]
                ,[role]
                FROM [test_users]; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  GetUsersByUsername: async function (param) {
    var query = `SELECT [Id]
                ,[firstname]
                ,[lastname]
                ,[userName]
                ,[password]
                ,[role]
                FROM [test_users]
                WHERE userName = '${param.userName}'; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  GetUsersById: async function (param) {
    var query = `SELECT [Id]
                ,[firstname]
                ,[lastname]
                ,[userName]
                ,[password]
                ,[role]
                FROM [test_users]
                WHERE Id = '${param.Id}'; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  PostUsers: async function (param) {
    var query = `INSERT INTO [test_users]
                ([userName]
                ,[password]
                ,[role])
                  VALUES
                (${helper.setDefaultParam(param.userName, null)}
                ,${helper.setDefaultParam(param.passWord, null)}
                ,${helper.setDefaultParam(param.role, null)}); `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  PutUsers: async function (param) {
    var query = `UPDATE [test_users]
                 SET [userName] = ${helper.setDefaultParam(param.userName, null)}
                    ,[password] = ${helper.setDefaultParam(param.passWord, null)}
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

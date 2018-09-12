import gConfig from '../../dbHelper.js'
import helper from '../../helper'
import dbConfig from '../../../hiddenConfig/configDB'

const modules = {
  GetUsers: async function (param) {
    var query = `SELECT [Id]
                ,[userName]
                ,[password]
                ,[role]
                FROM [test_users]
                WHERE activeStatus = 'Y'; `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
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
                WHERE userName = '${param.userName}' AND activeStatus = 'Y'; `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
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
                WHERE Id = '${param.Id}' AND activeStatus = 'Y'; `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
    return result
  },
  PostUsers: async function (param) {
    var query = `INSERT INTO [test_users]
                ([userName]
                ,[password]
                ,[role]
                ,[activeStatus])
                  VALUES
                (${helper.setDefaultParam(param.userName, null)}
                ,${helper.setDefaultParam(param.passWord, null)}
                ,${helper.setDefaultParam(param.role, null)}
                ,'Y'); `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
    return result
  },
  PutUsers: async function (param) {
    var query = `UPDATE [test_users]
                 SET [userName] = ${helper.setDefaultParam(param.userName, null)}
                    ,[password] = ${helper.setDefaultParam(param.passWord, null)}
                    ,[role] = ${helper.setDefaultParam(param.role, null)}
                 WHERE Id = ${helper.setDefaultParam(param.Id, null)} AND activeStatus = 'Y'; `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
    return result
  },
  DeleteUsers: async function (param) {
    var query = `UPDATE [test_users]
                 SET [activeStatus] = 'N'
                 WHERE Id = ${helper.setDefaultParam(param.Id, null)}; `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
    return result
  }
}

module.exports = modules

import gConfig from '../../dbHelper.js'
import helper from '../../helper.js'
import dbConfig from '../../../hiddenConfig/configDB'
class ProjectDAL {
  async GetProjects (param) {
    var query = `SELECT [Id]
                ,[name]
                ,[description]
                ,[createBy]
                ,[activeStatus]
                FROM [test_projects]; `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
    return result
  }
  async GetProjectById (param) {
    var query = `SELECT [Id]
                ,[name]
                ,[description]
                ,[createBy]
                FROM [test_projects]
                WHERE Id = ${helper.setDefaultParam(param.Id, null)}; `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
    return result
  }
  async GetProjectByName (param) {
    var query = `SELECT [Id]
                ,[name]
                ,[description]
                ,[createBy]
                FROM [test_projects]
                WHERE name = ${helper.setDefaultParam(param.name, null)}; `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
    return result
  }
  async GetProjectByCreateId (param) {
    var query = `SELECT [Id]
                ,[name]
                ,[description]
                ,[createBy]
                FROM [test_projects]
                WHERE createBy = ${helper.setDefaultParam(param.createBy, null)}; `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
    return result
  }
  async PostProject (param) {
    var query = `INSERT INTO [test_projects]
                ([name]
                ,[description]
                ,[createBy])
                 VALUES
                (${helper.setDefaultParam(param.name, null)}
                ,${helper.setDefaultParam(param.description, null)}
                ,${helper.setDefaultParam(param.createBy, null)}); `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
    return result
  }
  async PutProject (param) {
    var query = `UPDATE [test_projects]
                 SET [name] = ${helper.setDefaultParam(param.name, null)}
                    ,[description] = ${helper.setDefaultParam(param.description, null)}
                 WHERE Id = ${helper.setDefaultParam(param.Id, null)}; `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
    return result
  }
  async ActiveProject (param) {
    var query = `UPDATE [test_projects]
                 SET [activeStatus] = ${helper.setDefaultParam(param.activeStatus, null)}
                 WHERE Id = ${helper.setDefaultParam(param.Id, null)}; `
    let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
    return result
  }
}

module.exports = ProjectDAL

import gConfig from '../../dbHelper.js'
import helper from '../../helper.js'

const modules = {
  GetProjects: async function (param) {
    var query = `SELECT [Id]
                ,[name]
                ,[description]
                ,[createBy]
                FROM [test_projects]; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  GetProjectById: async function (param) {
    var query = `SELECT [Id]
                ,[name]
                ,[description]
                ,[createBy]
                FROM [test_projects]
                WHERE Id = ${helper.setDefaultParam(param.Id, null)}; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  GetProjectByCreateId: async function (param) {
    var query = `SELECT [Id]
                ,[name]
                ,[description]
                ,[createBy]
                FROM [test_projects]
                WHERE createBy = ${helper.setDefaultParam(param.createBy, null)}; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  PostProject: async function (param) {
    var query = `INSERT INTO [test_projects]
                ([name]
                ,[description]
                ,[createBy])
                 OUTPUT test_projects.Id
                 VALUES
                (${helper.setDefaultParam(param.name, null)}
                ,${helper.setDefaultParam(param.description, null)}
                ,${helper.setDefaultParam(param.createBy, null)}); `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  PutProject: async function (param) {
    var query = `UPDATE [test_projects]
                 SET [name] = ${helper.setDefaultParam(param.name, null)}
                    ,[description] = ${helper.setDefaultParam(param.description, null)}
                 WHERE Id = ${helper.setDefaultParam(param.Id, null)}; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  DeleteProject: async function (param) {
    var query = `DELETE FROM [test_projects]
                 WHERE Id = ${helper.setDefaultParam(param.Id, null)}; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  }
}

module.exports = modules

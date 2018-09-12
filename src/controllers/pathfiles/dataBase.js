import gConfig from '../../dbHelper.js'
import helper from '../../helper.js'

const modules = {
  GetPathFiles: async function (param) {
    var query = `SELECT [id]
                ,[projectId]
                ,[path]
                FROM [test_project_files] `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  GetPathFileById: async function (param) {
    var query = `SELECT [id]
                ,[projectId]
                ,[path]
                FROM [test_project_files]
                WHERE Id = '${param.Id}'`
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  PostPathFile: async function (param) {
    var query = `INSERT INTO [test_project_files]
                ([projectId]
                ,[path]
                 VALUES
                (${helper.setDefaultParam(param.projectId, null)}
                ,${helper.setDefaultParam(param.path, null)}); `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  PutPathFile: async function (param) {
    var query = `UPDATE [test_project_files]
                 SET [projectId] = ${helper.setDefaultParam(param.projectId, null)}
                    ,[path] = ${helper.setDefaultParam(param.path, null)}
                 WHERE id = ${helper.setDefaultParam(param.id, null)}; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
  DeletePathFile: async function (param) {
    var query = `DELETE FROM [test_project_files]
                 WHERE id = ${helper.setDefaultParam(param.id, null)}; `
    let result = await gConfig.executeQueryAsync(gConfig.conn02, query)
    return result
  },
}

module.exports = modules

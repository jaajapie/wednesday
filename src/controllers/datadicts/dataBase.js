// import gConfig from '../../dbHelper.js'
// import helper from '../../helper.js'
// import dbConfig from '../../../hiddenConfig/configDB'

// class TableDAL {
//   GetAllServer () {
//     let data = dbConfig.GetAllServer()
//     return data
//   }
//   GetAllServerById (Id) {
//     let dataServer = dbConfig.GetAllServer()
//     let data = dataServer.filter((f) => {
//       return f.Id === 4
//     })
//     return data[0]
//   }
//   async GetAllTableByServerId (Id) {
//     let server = this.GetAllServerById(Id)
//     let serverDetail = dbConfig.GetServerDetail(server.Conn)
//     let query = `SELECT TABLE_NAME FROM ${serverDetail.database}.INFORMATION_SCHEMA.TABLES Order by TABLE_NAME ; `
//     let result = await gConfig.executeQueryAsync(serverDetail, query)
//     return result
//   }
//   async GetTableDetail (Id, param) {
//     let server = this.GetAllServerById(Id)
//     let serverDetail = dbConfig.GetServerDetail(server.Conn)
//     let query = `SELECT TABLE_NAME,COLUMN_NAME,ORDINAL_POSITION,COLUMN_DEFAULT,IS_NULLABLE,DATA_TYPE,CHARACTER_MAXIMUM_LENGTH,NUMERIC_PRECISION,NUMERIC_SCALE
//                  FROM INFORMATION_SCHEMA.COLUMNS
//                  WHERE TABLE_NAME in (${helper.setDefaultParam(param.tableNames, null)}); `
//     let result = await gConfig.executeQueryAsync(serverDetail, query)
//     return result
//   }
//   async GetTableProjectByProjectId (param) {
//     var query = `SELECT [Id]
//                 ,[projectId]
//                 ,[tableName]
//                 ,[description]
//                 FROM [test_project_table]
//                 WHERE projectId = ${helper.setDefaultParam(param.projectId, null)}; `
//     let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
//     return result
//   }
//   async PostTableProject (param) {
//     var query = `INSERT INTO [test_project_table]
//                 ([projectId]
//                  [tableName]
//                 ,[description])
//                  VALUES
//                 (${helper.setDefaultParam(param.projectId, null)}
//                 ,${helper.setDefaultParam(param.tableName, null)}
//                 ,${helper.setDefaultParam(param.description, null)}); `
//     let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
//     return result
//   }
//   async PutTableProject (param) {
//     var query = `UPDATE [test_project_table]
//                  SET  [tableName] = ${helper.setDefaultParam(param.tablename, null)}
//                  ,[description] = ${helper.setDefaultParam(param.description, null)}
//                  WHERE [projectId] = ${helper.setDefaultParam(param.projectId, null)}; `
//     let result = await gConfig.executeQueryAsync(dbConfig.connDev02, query)
//     return result
//   }
// }

// module.exports = TableDAL

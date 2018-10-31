// import TableDAL from './dataBase'
// const helper = require('../../helper.js')

// class DataDictBLL {
//   constructor () {
//     this.dll = new TableDAL()
//   }
//   async GetAllServer () {
//     let result = await this.dll.GetAllServer()
//     return { status: 200, data: result }
//   }
//   async GetAllTableByServerId (Id) {
//     let result = await this.dll.GetAllTableByServerId(Id)
//     if (result.err !== undefined) {
//       return { status: 500, message: result.err.message }
//     } else if (result.result.recordset.length === 0) {
//       return { status: 204, message: 'no table data' }
//     } else {
//       let _arrTable = helper.convertArrToArrString(result.result.recordsets[0])
//       return { status: 200, data: _arrTable }
//     }
//   }
//   async GetDatadictDetail (Id, param) {
//     let tableNames = param.join("','")
//     let result = await this.dll.GetTableDetail(Id, {tableNames: tableNames})
//     if (result.err !== undefined) {
//       return { status: 500, message: result.err.message }
//     } else {
//       let resultData = []
//       let _arrTable = helper.convertArrToArrString(result.result.recordsets[0])
//       for (var i = 0; i < _arrTable.length; i++) {
//         let tableData = resultData.filter((f) => {
//           return f.tablename === _arrTable[i].TABLE_NAME
//         })
//         if (tableData.length === 0) {
//           let tablename = {}
//           tablename.tablename = _arrTable[i].TABLE_NAME
//           tablename.structure = []
//           tablename.structure.push({
//             columnName: _arrTable[i].COLUMN_NAME,
//             order: _arrTable[i].ORDINAL_POSITION,
//             default: _arrTable[i].COLUMN_DEFAULT,
//             isNull: _arrTable[i].IS_NULLABLE,
//             textLength: _arrTable[i].CHARACTER_MAXIMUM_LENGTH,
//             numberDigit: '(' + _arrTable[i].NUMERIC_PRECISION + ',' + _arrTable[i].NUMERIC_SCALE + ')'
//           })
//           resultData.push(tablename)
//         } else {
//           tableData.structure.push({
//             columnName: _arrTable[i].COLUMN_NAME,
//             order: _arrTable[i].ORDINAL_POSITION,
//             default: _arrTable[i].COLUMN_DEFAULT,
//             isNull: _arrTable[i].IS_NULLABLE,
//             textLength: _arrTable[i].CHARACTER_MAXIMUM_LENGTH,
//             numberDigit: '(' + _arrTable[i].NUMERIC_PRECISION + ',' + _arrTable[i].NUMERIC_SCALE + ')'
//           })
//         }
//         return { status: 200, data: resultData }
//       }
//     }
//   }
//   async GetDatadictByProjectId (Id) {
//     let result = await this.dll.GetTableProjectById({projectId: Id})
//     if (result.err !== undefined) {
//       return { status: 500, message: result.err.message }
//     } else if (result.result.recordset.length === 0) {
//       return { status: 204, message: 'no project data' }
//     } else {
//       let _arrProject = helper.convertArrToArrString(result.result.recordsets[0])
//       return { status: 200, data: _arrProject }
//     }
//   }
//   async PostDataDict (param) {
//     if (param.details) {
//       for (var i = 0; i < param.details.length; i++) {
//         let result = await this.dll.PostTableProject(param.details[i])
//         if (result.err !== undefined) {
//           return { status: 500, message: result.err.message }
//         }
//       }
//       return { status: 201 }
//     } else {
//       return { status: 400, message: 'Require data' }
//     }
//   }
//   async PutDataDict (Id, param) {
//     if (param.details) {
//       for (var i = 0; i < param.details.length; i++) {
//         let result = await this.dll.GetTableProjectById({projectId: Id})
//         if (result.err !== undefined) {
//           return { status: 500, message: result.err.message }
//         } else if (result.result.recordset.length === 0) {
//           await this.dll.PostTableProject(param.details[i])
//         } else {
//           await this.dll.PutTableProject(param.details[i])
//         }
//       }
//       return { status: 200 }
//     }
//   }
// }

// module.exports = DataDictBLL

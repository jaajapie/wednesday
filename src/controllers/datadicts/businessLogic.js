import TableDAL from './dataBase'
const helper = require('../../helper.js')

class DataDictBLL {
  constructor () {
    this.dll = new TableDAL()
  }
  async GetAllServer () {
    let result = await this.dll.GetAllServer()
    return { status: 200, data: result }
  }
  async GetAllTableByServerId (Id) {
    let result = await this.dll.GetAllTableByServerId(Id)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else if (result.result.recordset.length === 0) {
      return { status: 204, message: 'no table data' }
    } else {
      let _arrTable = helper.convertArrToArrString(result.result.recordsets[0])
      return { status: 200, data: _arrTable }
    }
  }
  async GetDatadictByProjectId (Id) {
    let result = await this.dll.GetTableProjectById({projectId: Id})
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else if (result.result.recordset.length === 0) {
      return { status: 204, message: 'no project data' }
    } else {
      let _arrProject = helper.convertArrToArrString(result.result.recordsets[0])
      return { status: 200, data: _arrProject }
    }
  }
  async PostDataDict (param) {
    let result = await this.dll.PostTableProject(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else {
      return { status: 201 }
    }
  }
  async PutDataDict (param) {
    let result = await this.dll.PostTableProject(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else {
      return { status: 200 }
    }
  }
}

module.exports = DataDictBLL

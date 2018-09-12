const dll = require('./dataBase')
const bcrypt = require('bcryptjs')
const helper = require('../../helper.js')

const modules = {
  GetPathFiles: async function (param) {
    let result = await dll.GetPathFiles(param)
    if (result.result.recordset.length === 0) {
      return { status: 204, message: 'no path data' }
    } else {
      let _arrPathFile = helper.convertArrToArrString(result.result.recordsets[0])
      return { status: 200, data: _arrPathFile }
    }
  },
  GetPathFileById: async function (param) {
    let result = await dll.GetPathFileById(param)
    if (result.result.recordset.length === 0) {
      return { status: 204, message: 'no path data' }
    } else {
      let _arrPathFile = helper.convertArrToArrString(result.result.recordsets[0])
      return { status: 200, data: _arrPathFile }
    }
  },
  PostPathFile: async function (param) {
    param.passWord = bcrypt.hashSync(param.passWord)
    param.role = 'Sa'
    let result = await dll.PostPathFile(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else {
      let pathCreated = await dll.GetPathFileById(param)
      if (pathCreated.err !== undefined) {
        return { status: 500, message: pathCreated.err.message }
      } else {
        let _arrPathFile = helper.convertArrToArrString(pathCreated.result.recordsets[0])
        return { status: 201, data: _arrPathFile }
      }
    }
  },
  PutPathFile: async function (Id, param) {
    let pathData = await this.GetPathFileById({Id: Id})
    if (pathData.status === 204) {
      return { status: 204, message: 'no path data' }
    }
    param.Id = Id
    param.role = pathData.data[0].role
    let result = await dll.PutPathFile(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else {
      let pathUpdated = await dll.GetPathFileById({Id: Id})
      if (pathUpdated.err !== undefined) {
        return { status: 500, message: pathUpdated.err.message }
      } else {
        let _arrPathFile = helper.convertArrToArrString(pathUpdated.result.recordsets[0])
        return { status: 200, data: _arrPathFile }
      }
    }
  },
  DeletePathFile: async function (Id, param) {
    let pathData = await this.GetPathFileById({Id: Id})
    if (pathData.status === 204) {
      return { status: 204, message: 'no path data' }
    }
    param.Id = Id
    let result = await dll.DeletePathFile(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else {
      let pathUpdated = await dll.GetPathFilesById({Id: Id})
      if (pathUpdated.err !== undefined) {
        return { status: 500, message: pathUpdated.err.message }
      } else {
        let _arrPathFile = helper.convertArrToArrString(pathUpdated.result.recordsets[0])
        return { status: 200, data: _arrPathFile }
      }
    }
  }
}

module.exports = modules

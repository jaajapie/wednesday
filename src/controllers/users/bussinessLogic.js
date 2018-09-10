const dll = require('./dataBase')
const bcrypt = require('bcryptjs')
const helper = require('../../helper.js')

const modules = {
  GetUsers: async function (param) {
    let result = await dll.GetUsers(param)
    if (result.result.recordset.length === 0) {
      return { status: 204, message: 'no user data' }
    } else {
      let _arrUser = helper.convertArrToArrString(result.result.recordsets[0])
      return { status: 200, data: _arrUser }
    }
  },
  GetUsersById: async function (param) {
    let result = await dll.GetUsersById(param)
    if (result.result.recordset.length === 0) {
      return { status: 204, message: 'no user data' }
    } else {
      let _arrUser = helper.convertArrToArrString(result.result.recordsets[0])
      return { status: 200, data: _arrUser }
    }
  },
  PostUsers: async function (param) {
    param.passWord = bcrypt.hashSync(param.passWord)
    param.role = 'Sa'
    let result = await dll.PostUsers(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else {
      let userCreated = await dll.GetUsersByUsername(param)
      if (userCreated.err !== undefined) {
        return { status: 500, message: userCreated.err.message }
      } else {
        let _arrUser = helper.convertArrToArrString(userCreated.result.recordsets[0])
        return { status: 201, data: _arrUser }
      }
    }
  },
  PutUser: async function (Id, param) {
    let userData = await this.GetUsersById({Id: Id})
    if (userData.status === 204) {
      return { status: 204, message: 'no user data' }
    }
    param.Id = Id
    param.role = userData.data[0].role
    let result = await dll.PutUsers(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else {
      let userUpdated = await dll.GetUsersById({Id: Id})
      if (userUpdated.err !== undefined) {
        return { status: 500, message: userUpdated.err.message }
      } else {
        let _arrUser = helper.convertArrToArrString(userUpdated.result.recordsets[0])
        return { status: 200, data: _arrUser }
      }
    }
  },
  DeleteUser: async function (Id, param) {
    let userData = await this.GetUsersById({Id: Id})
    console.log(userData)
    if (userData.status === 204) {
      return { status: 204, message: 'no user data' }
    }
    console.log('sss')
    param.Id = Id
    let result = await dll.DeleteUsers(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else {
      let userUpdated = await dll.GetUsersById({Id: Id})
      if (userUpdated.err !== undefined) {
        return { status: 500, message: userUpdated.err.message }
      } else {
        let _arrUser = helper.convertArrToArrString(userUpdated.result.recordsets[0])
        return { status: 200, data: _arrUser }
      }
    }
  }
}

module.exports = modules

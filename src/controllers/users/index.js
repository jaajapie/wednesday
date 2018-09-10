const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const bll = require('./bussinessLogic.js')
const helper = require('../../helper.js')

const modules = {
  GetUsers: async function (req, res) {
    let result = await bll.GetUsers(req.query)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    } else if (result.status === 404) {
      helper.responseToClient({ res: res, httpcode: '404', msgerror: result.message })
    }
  },
  PostUsers: async function (req, res) {
    if (req.body.userName === undefined) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required userName' })
    } else if (req.body.passWord === undefined) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required passWord' })
    } else {
      let result = await bll.PostUsers(req.body)
      if (result.status === 201) {
        helper.responseToClient({ res: res, httpcode: '201', data: result.data })
      }
    }
  },
  PutUsers: async function (req, res) {
    const {id} = req.params
    let result = await bll.PutUser(id, req.body)
    if (result.status === 204) {
      helper.responseToClient({ res: res, httpcode: '204', message: result.message })
    } else {

      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    }
  },
  DeleteUsers: async function (req, res) {
    const {id} = req.params
    let result = await bll.DeleteUser(id, req.body)
    if (result.status === 204) {
      helper.responseToClient({ res: res, httpcode: '204', message: result.message })
    } else {

      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    }
  }
}
module.exports = modules

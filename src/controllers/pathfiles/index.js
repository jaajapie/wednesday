const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const bll = require('./bussinessLogic')
const helper = require('../../helper.js')

const modules = {
  GetPathFiles: async function (req, res) {
    let result = await bll.GetPathFiles(req.query)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    } else if (result.status === 404) {
      helper.responseToClient({ res: res, httpcode: '404', msgerror: result.message })
    }
  },
  PostPathFile: async function (req, res) {
    if (req.body.projectId === undefined) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required projectId' })
    } else if (req.body.path === undefined) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required path' })
    } else {
      let result = await bll.PostPathFile(req.body)
      if (result.status === 201) {
        helper.responseToClient({ res: res, httpcode: '201', data: result.data })
      }
    }
  },
  PutPathFile: async function (req, res) {
    const {id} = req.params
    let result = await bll.PutPathFile(id, req.body)
    if (result.status === 204) {
      helper.responseToClient({ res: res, httpcode: '204', message: result.message })
    } else {

      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    }
  },
  DeletePathFile: async function (req, res) {
    const {id} = req.params
    let result = await bll.DeletePathFile(id, req.body)
    if (result.status === 204) {
      helper.responseToClient({ res: res, httpcode: '204', message: result.message })
    } else {

      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    }
  }
}
module.exports = modules

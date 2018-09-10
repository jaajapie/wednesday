const bll = require('./bussinessLogic.js')
const helper = require('../../helper.js')

const ctrl = {}

ctrl.GetUsersAll = async function (req, res) {
  let result = await bll.GetUsersAll(req.params)
  if (result.status === 200) {
    helper.responseToClient({ res: res, httpcode: '200', data: result.data })
  } else if (result.status === 404) {
    helper.responseToClient({ res: res, httpcode: '404', msgerror: result.message })
  }
}

ctrl.GetUsersById = async function (req, res) {
  let result = await bll.GetUsersById(req.params)
  console.log('result => ', result)
  if (result.result.status === 200) {
    helper.responseToClient({ res: res, httpcode: '200', data: result })
  } else if (result.result.status === 404) {
    helper.responseToClient({ res: res, httpcode: '404', msgerror: result.message })
  }
}

ctrl.PostUsers = async function (req, res) {
  if (!req.body.firstName) {
    helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required firstName' })
  } else if (!req.body.userName) {
    helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required Username' })
  } else if (!req.body.password) {
    helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required Password' })
  } else {
    let result = await bll.PostUsers(req.body)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200' })
    }
  }
}

module.exports = ctrl

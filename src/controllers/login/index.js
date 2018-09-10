const bll = require('./bussinessLogic')
const helper = require('../../helper')

const ctrl = {}

ctrl.GetUsersAll = async (req, res) => {
  let result = await bll.GetUsersAll(req.params)
  if (result.status === 200) {
    helper.responseToClient({ res: res, httpcode: '200', data: result.data })
  } else if (result.status === 404) {
    helper.responseToClient({ res: res, httpcode: '404', msgerror: result.message })
  }
}

ctrl.GetUsersById = async (req, res) => {
  let result = await bll.GetUsersById(req.params)
  if (result.result.status === 200) {
    helper.responseToClient({ res: res, httpcode: '200', data: result })
  } else if (result.result.status === 404) {
    helper.responseToClient({ res: res, httpcode: '404', msgerror: result.message })
  }
}

ctrl.PostUsers = async (req, res) => {
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

ctrl.PutUsers = async (req, res) => {
  if (!req.params.id) {
    helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required id' })
  }
  if (!req.body.firstName) {
    helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required firstName' })
  } else if (!req.body.userName) {
    helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required Username' })
  } else if (!req.body.password) {
    helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required Password' })
  } else {
    let { result } = await bll.PutUsers(req)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200' })
    } else if (result.status === 500) {
      helper.responseToClient({ res: res, httpcode: '500' })
    }
  }
}

ctrl.DeleteUser = async (req, res) => {
  if (!req.params.id) {
    helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required id' })
  } else {
    let { result } = await bll.DeleteUser(req)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200' })
    } else if (result.status === 500) {
      helper.responseToClient({ res: res, httpcode: '500' })
    }
  }
}

module.exports = ctrl

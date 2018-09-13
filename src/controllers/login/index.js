const bll = require('./bussinessLogic')
const helper = require('../../helper')

const ctrl = {}

ctrl.Login = async (req, res) => {
  let result = await bll.Login(req.body)
  if (result.status === 200) {
    helper.responseToClient({ res: res, httpcode: '200', data: result.data })
  } else if (result.status === 404) {
    helper.responseToClient({ res: res, httpcode: '203', msgerror: result.message })
  }
}

module.exports = ctrl

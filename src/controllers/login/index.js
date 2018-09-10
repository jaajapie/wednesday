const bll = require('./businessLogic')
const helper = require('../../helper.js')

const modules = {
  Login: async function (req, res) {
    if (req.body.userName === undefined) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required userName' })
    } else if (req.body.passWord === undefined) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required passWord' })
    } else {
      let result = await bll.Login(req.body)
      if (result.status === 200) {
        helper.responseToClient({ res: res, httpcode: '200', data: result.data })
      } else if (result.status === 401) {
        helper.responseToClient({ res: res, httpcode: '401', msgerror: result.message })
      } else if (result.status === 500) {
        helper.responseToClient({ res: res, httpcode: '500', msgerror: result.message })
      }
    }
  }
}
module.exports = modules

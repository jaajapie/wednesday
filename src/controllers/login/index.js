const bll = require('./bussinessLogic')
const helper = require('../../helper')

const ctrl = {}

ctrl.Login = async (req, res) => {
  let result = await bll.Login(req.body)
}

module.exports = ctrl

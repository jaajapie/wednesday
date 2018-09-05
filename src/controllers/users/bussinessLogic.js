const dll = require('./dataBase')

const ctrl = {}

ctrl.GetUsers = async function (param) {
    let result = await dll.GetUsers(param)
    return { status: 200, data: result }
  },
ctrl.GetUsers = async function (param) {
  let result = await dll.PostUsers(param)
  return { status: 200, data: result }
}

module.exports = ctrl
const dll = require('./dataBase')

const ctrl = {}

ctrl.Login = async (param) => {
  let result = await dll.Login(param)
  if (result.status === 200) {
    return { status: 200, data: result }
  }
  return { status: 404, data: result }
}

module.exports = ctrl

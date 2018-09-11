const dll = require('./dataBase')

const ctrl = {}

ctrl.Login = async (param) => {
  console.log(' req.body ==>', param)
  let result = await dll.Login(param)
  return { result }
}

module.exports = ctrl

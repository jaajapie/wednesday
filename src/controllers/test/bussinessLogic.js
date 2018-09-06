const dll = require('./dataBase')

const ctrl = {}

ctrl.GetTests = async (param) => {
  let result = await dll.GetTests(param)
  console.log(result)
  if (result.status) {
    return { status: 200, data: result }
  }
  return { status: 404, data: result }
}
module.exports = ctrl

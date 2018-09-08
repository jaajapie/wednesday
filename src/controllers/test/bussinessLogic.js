const dll = require('./dataBase')

const ctrl = {}

ctrl.GetTests = async (param) => {
  let result = await dll.GetTests(param)
  if (result.status) {
    return { status: 200, data: result }
  }
  return { status: 404, data: result }
}

ctrl.GetTestsQueryRaw = async (param) => {
  let result = await dll.GetTestsQueryRaw(param)
  if (result.status) {
    return { status: 200, data: result }
  }
  return { status: 404, data: result }
}

ctrl.GetTestsId = async (param) => {
  let result = await dll.GetTestsId(param)
  if (result.status) {
    return { status: 200, data: result }
  }
  return { status: 404, data: result }
}
module.exports = ctrl

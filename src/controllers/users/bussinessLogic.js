const dll = require('./dataBase')

const ctrl = {}

ctrl.GetUsersById = async function (param) {
  let result = await dll.GetUsersById(param)
  return { result }
}
ctrl.GetUsersAll = async function (param) {
  let result = await dll.GetUsersAll(param)
  return { status: 200, data: result }
}
ctrl.PostUsers = async function (param) {
  let result = await dll.PostUsers(param)
  console.log(' result ==> ', result)
  return { status: 200, data: result }
}

module.exports = ctrl

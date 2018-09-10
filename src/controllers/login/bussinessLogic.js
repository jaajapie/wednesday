const dll = require('./dataBase')

const ctrl = {}

ctrl.GetUsersById = async (param) => {
  let result = await dll.GetUsersById(param)
  return { result }
}
ctrl.GetUsersAll = async (param) => {
  let result = await dll.GetUsersAll(param)
  return { status: 200, data: result }
}
ctrl.PostUsers = async (param) => {
  let result = await dll.PostUsers(param)
  console.log(' result ==> ', result)
  return { status: 200, data: result }
}
ctrl.PutUsers = async (req) => {
  let result = await dll.PutUsers(req)
  return { result }
}
ctrl.DeleteUser = async (req) => {
  let result = await dll.DeleteUser(req)
  return { result }
}

module.exports = ctrl

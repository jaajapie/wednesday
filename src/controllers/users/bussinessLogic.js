import dll from './dataBase'

export default {
  GetUsers: async function (param) {
    let result = await dll.GetUsers(param)
    return { status: 200, data: result }
  },
  PostUsers: async function (param) {
    let result = await dll.PostUsers(param)
    return { status: 200, data: result }
  }
}

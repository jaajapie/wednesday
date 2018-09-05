import dll from './dataBase'

export default {
  GetUsers: async function (param) {
    let result = await dll.GetUsers(param)
    return result
  },
  PostUsers: async function (param) {

  }
}

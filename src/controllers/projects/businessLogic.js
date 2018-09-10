const dll = require('./dataBase')

const modules = {
  GetProjects: async function (param) {
    let result = await dll.GetProjects(param)
    return { status: 200, data: result }
  },
  PostProject: async function (param) {
    let result = await dll.PostProject(param)
    return { status: 200, data: result }
  }
}

module.exports = modules

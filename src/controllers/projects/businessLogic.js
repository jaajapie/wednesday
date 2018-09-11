import ProjectDAL from './dataBase'
const helper = require('../../helper.js')
class ProjectBLL {
  constructor () {
    this.dll = new ProjectDAL()
  }
  async GetProjects (param) {
    let result = await this.dll.GetProjects(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else if (result.result.recordset.length === 0) {
      return { status: 204, message: 'no user data' }
    } else {
      let _arrProject = helper.convertArrToArrString(result.result.recordsets[0])
      return { status: 200, data: _arrProject }
    }
  }
  async GetProjectById (Id) {
    let result = await this.dll.GetProjectById({Id: Id})
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else if (result.result.recordset.length === 0) {
      return { status: 204, message: 'no project data' }
    } else {
      let _arrProject = helper.convertArrToArrString(result.result.recordsets[0])
      return { status: 200, data: _arrProject }
    }
  }
  async PostProject (param) {
    let result = await this.dll.PostProject(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else {
      let projectCreated = await this.dll.GetProjectByName(param)
      if (projectCreated.err !== undefined) {
        return { status: 500, message: projectCreated.err.message }
      } else {
        let _arrProject = helper.convertArrToArrString(projectCreated.result.recordsets[0])
        return { status: 201, data: _arrProject }
      }
    }
  }
  async PutProject (Id, param) {
    let projectData = await this.GetProjectById({Id: Id})
    if (projectData.status === 204) {
      return { status: 204, message: 'no user data' }
    }
    param.Id = Id
    let result = await this.dll.PutProject(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else {
      let projectCreated = await this.dll.GetProjectById({Id: Id})
      if (projectCreated.err !== undefined) {
        return { status: 500, message: projectCreated.err.message }
      } else {
        let _arrProject = helper.convertArrToArrString(projectCreated.result.recordsets[0])
        return { status: 200, data: _arrProject }
      }
    }
  }
  async DeleteProject (Id, param) {
    let projectData = await this.dll.GetProjectById({Id: Id})
    if (projectData.status === 204) {
      return { status: 204, message: 'no project data' }
    }
    param.Id = Id
    param.activeStatus = 'N'
    let result = await this.dll.ActiveProject(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err.message }
    } else {
      let projectUpdated = await this.dll.GetProjectById({Id: Id})
      if (projectUpdated.err !== undefined) {
        return { status: 500, message: projectUpdated.err.message }
      } else {
        let _arrUser = helper.convertArrToArrString(projectUpdated.result.recordsets[0])
        return { status: 200, data: _arrUser }
      }
    }
  }
}

module.exports = ProjectBLL

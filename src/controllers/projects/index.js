// const bll = require('./businessLogic')
import ProjectBLL from './businessLogic'
const helper = require('../../helper.js')

class ProjectIndex {
  constructor () {
    this.bll = new ProjectBLL()
  }
  async GetProjects (req, res) {
    let result = await this.bll.GetProjects(req.query)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    } else if (result.status === 204) {
      helper.responseToClient({ res: res, httpcode: '204', msgerror: result.message })
    }
  }
  async GetProjectById (req, res) {
    const {id} = req.params
    let result = await this.bll.GetProjectById(id)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    } else { // if (result.status === 204) {
      helper.responseToClient({ res: res, httpcode: '204', msgerror: result.message })
    }
  }
  async PostProject (req, res) {
    if (req.body.name === undefined) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required name' })
    } else if (req.body.createBy === undefined) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required createBy (userId)' })
    } else {
      let result = await this.bll.PostProject(req.body)
      if (result.status === 201) {
        helper.responseToClient({ res: res, httpcode: '201', data: result.data })
      } else if (result.status === 500) {
        helper.responseToClient({ res: res, httpcode: '500', msgerror: result.message })
      }
    }
  }
  async PutProject (req, res) {
    const {id} = req.params
    let result = await this.bll.PutProject(id, req.body)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '201', data: result.data })
    } else if (result.status === 500) {
      helper.responseToClient({ res: res, httpcode: '500', msgerror: result.message })
    }
  }
  async DeleteProject (req, res) {
    const {id} = req.params
    let result = await this.bll.DeleteProject(id, req.body)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '201', data: result.data })
    } else if (result.status === 500) {
      helper.responseToClient({ res: res, httpcode: '500', msgerror: result.message })
    }
  }
}
export default new ProjectIndex()

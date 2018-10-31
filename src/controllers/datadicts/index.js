import DatadictBLL from './businessLogic'
const helper = require('../../helper.js')

class DatadictIndex {
  constructor () {
    this.bll = new DatadictBLL()
  }
  async GetAllServer (req, res) {
    let result = await this.bll.GetAllServer()
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    }
  }
  async GetAllTableByServerId (req, res) {
    const {id} = req.params
    let result = await this.bll.GetAllTableByServerId(id)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    }
  }
  async PostDatadictDetail (req, res) {
    const {id} = req.params
    let result = await this.bll.GetDatadictDetail(id, req.body)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    }
  }
  async GetDatadictByProjectId (req, res) {
    const {id} = req.params
    let result = await this.bll.GetAllTableByServerId(id)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    } else {
      helper.responseToClient({ res: res, httpcode: '204', msgerror: result.message })
    }
  }
  async PostDataDict (req, res) {
    if (req.body.data.length === 0) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required array data' })
    } else {
      let dataProjectId = req.body.data.filter((f) => {
        return f.projectId === '' || f.projectId === null
      })
      let dataTableName = req.body.data.filter((f) => {
        return f.tableName === '' || f.tableName === null
      })
      if (dataTableName.length !== 0) {
        helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required tableName' })
      } else if (dataProjectId.length !== 0) {
        helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required projectId' })
      }
    }
    let result = await this.bll.PostDataDict()
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    }
  }
  async PutDataDict (req, res) {
    if (req.body.data.length === 0) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required array data' })
    } else {
      let dataTableName = req.body.data.filter((f) => {
        return f.tableName === '' || f.tableName === null
      })
      if (dataTableName.length !== 0) {
        helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required tableName' })
      }
    }
    const {id} = req.params
    let result = await this.bll.GetAllTableByServerId(id)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    }
  }
}
export default new DatadictIndex()

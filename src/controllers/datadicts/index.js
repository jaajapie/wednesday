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
}
export default new DatadictIndex()

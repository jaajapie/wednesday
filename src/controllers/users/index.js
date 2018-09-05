import bll from './bussinessLogic.js'
import helper from '../../helper.js'

export default {
  GetUsers: async function (req, res) {
    let result = await bll.GetUsers(req.query)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200' })
    } else if (result.status === 404) {
      helper.responseToClient({ res: res, httpcode: '404', msgerror: result.message })
    }
  },
  PostUsers: async function (req, res) {
    let result = await bll.PostUsers(req.query)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200' })
    } else if (result.status === 400) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: result.message })
    }
  }
}

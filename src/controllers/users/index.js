import bll from './bussinessLogic.js'
import helper from '../../helper.js'

export default {
  GetUsers: async function (req, res) {
    let result = await bll.GetUsers(req.query)
    if (result.status === 200) {
      helper.responseToClient({ res: res, httpcode: '200', data: result.data })
    } else if (result.status === 404) {
      helper.responseToClient({ res: res, httpcode: '404', msgerror: result.message })
    }
  },
  PostUsers: async function (req, res) {
    if (req.body.Name === undefined) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required Name' })
    } else if (req.body.Username === undefined) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required Username' })
    } else if (req.body.Password === undefined) {
      helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required Password' })
    } else {
      let result = await bll.PostUsers(req.body)
      if (result.status === 200) {
        helper.responseToClient({ res: res, httpcode: '200' })
      }
    }
  }
}

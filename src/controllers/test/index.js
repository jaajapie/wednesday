const bll = require('./bussinessLogic.js')
const helper = require('../../helper.js')

const ctrl = {}

ctrl.GetTests = async (req, res) => {
  let result = await bll.GetTests(req.query)
  if (result.status === 200) {
    helper.responseToClient({ res: res, httpcode: '200', data: result.data })
  } else if (result.status === 404) {
    helper.responseToClient({ res: res, httpcode: '404', msgerror: result.message })
  }
}
// ctrl.GetTests = async function (req, res) {
//   let result = await bll.GetTests(req.query)
//   if (result.status === 200) {
//     helper.responseToClient({ res: res, httpcode: '200', data: result.data })
//   } else if (result.status === 404) {
//     helper.responseToClient({ res: res, httpcode: '404', msgerror: result.message })
//   }
// },
// ctrl.PostUsers = async function (req, res) {
//   if (req.body.Name === undefined) {
//     helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required Name' })
//   } else if (req.body.Username === undefined) {
//     helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required Username' })
//   } else if (req.body.Password === undefined) {
//     helper.responseToClient({ res: res, httpcode: '400', msgerror: 'Required Password' })
//   } else {
//     let result = await bll.PostUsers(req.body)
//     if (result.status === 200) {
//       helper.responseToClient({ res: res, httpcode: '200' })
//     }
//   }
// }

module.exports = ctrl
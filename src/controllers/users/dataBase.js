// let users = [{Id: 1, Name: 'Jang', Username: 'jang', Password: '1234'},
//     {Id: 2, Name: 'Jang2', Username: 'jang2', Password: '1234'}]
const sequelize = require('../../lib/sequelize') // ทำการเรียกใช้ sequelize

require('../../models/user')() // setup model
const userModel = sequelize.models['user']

const ctrl = {}
ctrl.GetUsersAll = async function (param) {
  try {
    const data = await userModel.all({
      attributes: ['firstname','lastname'],
      order: [
        ['id', 'desc']
      ]
    })
    return { data }
  } catch (e) {
    return { status: false, message: e.message }
  }
},

ctrl.GetUsersById = async function (param) {
  try {
    const data = await userModel.all({
      attributes: ['firstname','lastname'],
      where: {
        id: param.id
      },
      order: [
        ['id', 'desc']
      ]
    })
    return { status: 200, data }
  } catch (e) {
    return { status: 404, message: e.message }
  }
},

ctrl.PostUsers = async function (param) {
  // let Id = users[users.length - 1].Id + 1
  // users.push({ Id: Id, Name: param.Name, Username: param.Username, Password: param.Password })
  // return Id
}

// ctrl.GetTests = async (param) => {
//   try {
//     const data = await testModel.all({
//       attributes: ['test'],
//       order: [
//         ['id', 'desc']
//       ]
//     })
//     return { status: true, data }
//   } catch (e) {
//     return { status: false, message: e.message }
//   }
// }

module.exports = ctrl
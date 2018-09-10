const sequelize = require('../../lib/sequelize') // ทำการเรียกใช้ sequelize

require('../../models/user')() // setup model
const userModel = sequelize.models['test_user']

const ctrl = {}
ctrl.GetUsersAll = async function (param) {
  try {
    const data = await userModel.all({
      attributes: ['firstName', 'lastName'],
      order: [
        ['Id', 'desc']
      ]
    })
    return { data }
  } catch (e) {
    return { status: false, message: e.message }
  }
}

ctrl.GetUsersById = async function (param) {
  try {
    const data = await userModel.all({
      attributes: ['firstName', 'lastName'],
      where: {
        Id: param.id
      },
      order: [
        ['Id', 'desc']
      ]
    })
    return { status: 200, data }
  } catch (e) {
    return { status: 404, message: e.message }
  }
}

ctrl.PostUsers = async function (param) {
  let objInsert = {
    userName: `${param.userName}`,
    password: `${param.password}`,
    firstName: `${param.firstName}`,
    lastName: `${param.lastName}`,
    role: `${param.role}`,
    activeStatus: `${param.activeStatus}`
  }
  let { dataValues } = await userModel.create(objInsert)
  return dataValues.Id
}
module.exports = ctrl

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
    return { status: 500, message: e.message }
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
    return { status: 500, message: e.message }
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

ctrl.PutUsers = async function (req) {
  try {
    let objUpdate = {
      userName: `${req.body.userName}`,
      password: `${req.body.password}`,
      firstName: `${req.body.firstName}`,
      lastName: `${req.body.lastName}`,
      role: `${req.body.role}`,
      activeStatus: `${req.body.activeStatus}`
    }
    const p = await userModel.findById(req.params.id)
    await p.update(objUpdate)
    return { status: 200 }
  } catch (e) {
    return { status: 500, message: e.message }
  }
}

ctrl.DeleteUser = async (req) => {
  const { id } = req.params
  try {
    const p = await userModel.findById(id)
    await p.destroy()
    return { status: 200 }
  } catch (e) {
    return { status: 500, message: e.message }
  }
}
module.exports = ctrl

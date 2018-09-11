const sequelize = require('../../lib/sequelize') // ทำการเรียกใช้ sequelize
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('../../models/user')() // setup model
const userModel = sequelize.models['test_user']

const ctrl = {}

ctrl.Login = async (param) => {
  const { userName, password } = param
  console.log('username == >', userName)
  console.log('password == >', password)
  try {
    const u = await userModel.findOne({
      where: {
        userName
      }
    })
    console.log(' u => ', bcrypt.compareSync(password, u.password))
    if (!u) {
      return { status: 500, message: e.message }
    }
    if (bcrypt.compareSync(password, u.password)) {
      const token = jwt.sign({ userName: u.userName }, 'SECRET', {
        expiresIn: '2 hours'
      })
      console.log(' token ==> ', token)
      // res.status(200).json({ token })
    } else {
      return { status: 500, message: e.message }
    }
  } catch (e) {
    return { status: 500, message: e.message }
  }
}

module.exports = ctrl

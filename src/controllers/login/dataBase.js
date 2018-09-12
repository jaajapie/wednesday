const sequelize = require('../../lib/sequelize') // ทำการเรียกใช้ sequelize
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('../../models/user')() // setup model
const userModel = sequelize.models['test_user']

const ctrl = {}

ctrl.Login = async (param) => {
  const { userName, password } = param
  try {
    let data = await sequelize.query(` SELECT * FROM test_users WHERE userName = :userName `, { replacements: { userName: userName }, type: sequelize.QueryTypes.SELECT })
    if (!data[0]) {
      return { status: 500 }
    }
    if (bcrypt.compareSync(password, data[0].password)) {
      const token = jwt.sign({ userName: data[0].userName }, 'SECRET', {
        expiresIn: '2 hours'
      })
      return { status: true, data: token }
    } else {
      return { status: 500 }
    }
  } catch (e) {
    return { status: 500, message: e.message }
  }
}

module.exports = ctrl

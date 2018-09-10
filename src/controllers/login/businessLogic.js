const dllUser = require('../users/dataBase')
const helper = require('../../helper.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const modules = {
  Login: async function (param) {
    let result = await dllUser.GetUsersByUsername(param)
    if (result.err !== undefined) {
      return { status: 500, message: result.err }
    } else if (result.result.recordset.length === 0) {
      return { status: 401, message: 'userName or passWord not valid!!' }
    } else {
      let _arrUser = helper.convertArrToArrString(result.result.recordsets[0])
      if (bcrypt.compareSync(param.passWord, _arrUser[0].password )) {
        const token = jwt.sign({username: _arrUser[0].userName, role: _arrUser[0].role}, 'SECRET', {
          expiresIn: 360
        })
        _arrUser[0].token = token
        return { status: 200, data: _arrUser }
      } else {
        return { status: 401, message: 'userName or passWord not valid!!'  }
      }
    }
  }
}

module.exports = modules

const login = require('../src/controllers/login/businessLogic')
const db = require('../src/controllers/users/dataBase')
var assert = require('assert')
var sinon = require('sinon')

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      db.GetUsersByUsername = sinon.stub()
      db.GetUsersByUsername.withArgs('param')
      .returns({result: {firstname: 'jang', lastname: 'some text', userName: 'admin', password: 'xxxx', role: 'admin'}})
      expect(login.Login({userName: 'admin',passWord: 'xxxx'})).to.deep.equal({result: {firstname: 'jang', lastname: 'some text', userName: 'admin', password: 'xxxx', role: 'admin'}})
      // assert(proxy.status, 300)
    })
  })
})

function once (fn) {
  var returnValue = false
  var called = false
  return function () {
    if (!called) {
      called = true
      returnValue = fn.apply(this, arguments)
    }
    return returnValue
  }
}

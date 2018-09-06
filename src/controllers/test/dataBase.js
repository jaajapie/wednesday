
const sequelize = app.get('sequelize')
require('../../models/test')()
const testModel = sequelize.models['test']
// let users = [{Id: 1, Name: 'Jang', Username: 'jang', Password: '1234'},
//     {Id: 2, Name: 'Jang2', Username: 'jang2', Password: '1234'}]

const ctrl = {}
module.exports = ctrl

ctrl.GetTests = async (param) => {
  try {
    const data = await testModel.all({
      attributes: ['test'],
      order: [
        ['id', 'desc']
      ]
    })
    return { status: true, data }
  } catch (e) {
    return { status: false, message: e.message }
    // res.status(500).json({ error: e.message })
  }
}

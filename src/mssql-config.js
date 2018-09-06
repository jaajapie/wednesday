import app from './index'
const sequelize = app.get('sequelize')

const queryMs = {}
module.exports = queryMs

queryMs.ExecuteQuery = async (query) => {
  try {
    let data = await sequelize.query(` ${query} `, { type: sequelize.QueryTypes.SELECT })
    return { data: data, status: true }
  } catch (e) {
    return { error: e.message, status: false }
  }
}
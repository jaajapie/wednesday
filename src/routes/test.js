const router = require('express').Router()
const sequelize = app.get('sequelize')
const testModel = sequelize.models['test']
const { Op } = require('Sequelize')

router.get('/', async (req, res) => {
  try {
    // const sql = ` select * from products `
    // const result = await sequelize.query(sql)
    console.log(1)
    const { price = 0 } = req.query
    const data = await testModel.all({
      attributes: ['text'],
      order: [
        ['id', 'desc']
      ],
      limit: 10
    })
    res.json(data)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})
module.exports = router

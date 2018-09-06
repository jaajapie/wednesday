const router = require('express').Router()
const sequelize = app.get('sequelize')
const ctrlTest = require('../controllers/test/index')
// setup models
require('../models/test')()
const testModel = sequelize.models['test']

router.get('/getdata', async (req, res) => {
  let data = await ctrlTest.GetTests(req, res)
  res.json(data)
})

router.get('/', async (req, res) => {
  try {
    const data = await testModel.all({
      attributes: ['test'],
      order: [
        ['id', 'desc']
      ]
    })
    res.json(data)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

router.get('/call', async (req, res) => {
  try {
    let data = await sequelize.query(` select carloan_lead.id
      ,title_th + ' ' +name_th + ' ' + lastname_th as custname
      ,log_carloan_lead_process.tracking_remark
      ,log_carloan_lead_process.tracking_status
      ,log_carloan_lead_process.tracking_result
      ,case
      when carYear is not null and carbrand is not null
      then Convert(varchar,carYear) +' '+'/'+' '+ carbrand 
      +' '+'/'+' '+carmodel 
      else  '-' 
      end as custcar 
      ,log_carloan_lead_process.createdate
      ,createby 
      from carloan_lead with (nolock)
      left outer join log_carloan_lead_process with (nolock) on carloan_lead.id = log_carloan_lead_process.lead_id
      where is_active = 'y' 
      and carloan_lead.t_status is null 
      and carloan_lead.status is null
      and log_carloan_lead_process.tracking_remark is not null `, { type: sequelize.QueryTypes.SELECT })
    console.log(data)
    res.send({ data })
  } catch (e) {
    return res.send({
      status: false,
      message: e.message
    })
  }
})
module.exports = router

const sequelize = require('../../lib/sequelize') // ทำการเรียกใช้ sequelize

require('../../models/test')() // setup model
const testModel = sequelize.models['tests']

const ctrl = {}

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
  }
}

ctrl.GetTestsQueryRaw = async (param) => {
  try {
    let data = await sequelize.query(` SELECT * FROM tests `, { type: sequelize.QueryTypes.SELECT })
    return { status: true, data }
  } catch (e) {
    return { status: false, message: e.message }
  }
}

ctrl.GetTestsId = async (param) => {
  console.log('param =>', param)
  try {
    let data = await sequelize.query(` SELECT * FROM tests WHERE id = :id `, { replacements: { id: 1 }, type: sequelize.QueryTypes.SELECT })
    return { status: true, data }
  } catch (e) {
    return { status: false, message: e.message }
  }
}
// ctrl.get('/', async (req, res) => {
//   try {
//     const data = await testModel.all({
//       attributes: ['test'],
//       order: [
//         ['id', 'desc']
//       ]
//     })
//     res.json(data)
//   } catch (e) {
//     res.status(500).json({ error: e.message })
//   }
// })

// ctrl.get('/call', async (req, res) => {
//   try {
//     let data = await sequelize.query(` select carloan_lead.id
//       ,title_th + ' ' +name_th + ' ' + lastname_th as custname
//       ,log_carloan_lead_process.tracking_remark
//       ,log_carloan_lead_process.tracking_status
//       ,log_carloan_lead_process.tracking_result
//       ,case
//       when carYear is not null and carbrand is not null
//       then Convert(varchar,carYear) +' '+'/'+' '+ carbrand 
//       +' '+'/'+' '+carmodel 
//       else  '-' 
//       end as custcar 
//       ,log_carloan_lead_process.createdate
//       ,createby 
//       from carloan_lead with (nolock)
//       left outer join log_carloan_lead_process with (nolock) on carloan_lead.id = log_carloan_lead_process.lead_id
//       where is_active = 'y' 
//       and carloan_lead.t_status is null 
//       and carloan_lead.status is null
//       and log_carloan_lead_process.tracking_remark is not null `, { type: sequelize.QueryTypes.SELECT })

//     let data1 = await sequelize.query(` select carloan_lead.id
//       ,title_th + ' ' +name_th + ' ' + lastname_th as custname
//       ,log_carloan_lead_process.tracking_remark
//       ,log_carloan_lead_process.tracking_status
//       ,log_carloan_lead_process.tracking_result
//       ,case
//       when carYear is not null and carbrand is not null
//       then Convert(varchar,carYear) +' '+'/'+' '+ carbrand 
//       +' '+'/'+' '+carmodel 
//       else  '-' 
//       end as custcar 
//       ,log_carloan_lead_process.createdate
//       ,createby 
//       from carloan_lead with (nolock)
//       left outer join log_carloan_lead_process with (nolock) on carloan_lead.id = log_carloan_lead_process.lead_id
//       where is_active = 'y' 
//       and carloan_lead.t_status is null 
//       and carloan_lead.status is null
//       and log_carloan_lead_process.tracking_remark is not null `, { type: sequelize.QueryTypes.SELECT })

//     console.log(data)
//     res.send({ data, data1 })
//   } catch (e) {
//     return res.send({
//       status: false,
//       message: e.message
//     })
//   }
// })

// sequelize.authenticate().then(() => { // เทส connect db
//   console.log('Connection has been established successfully.')
// }).catch(err => {
//   console.error('Unable to connect to the database:', err)
// })

module.exports = ctrl

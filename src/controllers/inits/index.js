const bll = require('./bussinessLogic.js')
const helper = require('../../helper.js')
const connectDB = require('../../mssql-config.js')
const sequelize = app.get('sequelize')

const ctrl = {}
module.exports = ctrl

ctrl.CreateDatabase = async (req, res) => {
  try {
    let data = await connectDB.ExecuteQuery(` select carloan_lead.id
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
      and log_carloan_lead_process.tracking_remark is not null
    and carloan_lead.id = 2180000002 `)
    console.log(data)
    res.send({ data })
  } catch (e) {
    return res.send({
      status: false,
      message: e.message
    })
  }
}

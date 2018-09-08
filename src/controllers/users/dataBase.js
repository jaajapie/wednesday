let users = [{Id: 1, Name: 'Jang', Username: 'jang', Password: '1234'},
    {Id: 2, Name: 'Jang2', Username: 'jang2', Password: '1234'}]

const ctrl = {}
ctrl.GetUsers = async function (param) {
  return users
},
ctrl.PostUsers = async function (param) {
  let Id = users[users.length - 1].Id + 1
  users.push({ Id: Id, Name: param.Name, Username: param.Username, Password: param.Password })
  return Id
}

module.exports = ctrl
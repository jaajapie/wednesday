import app from './index'
const hp = {}

hp.responseToClient = function Response ({res, httpcode, data, msgerror}) {
  let reData = {}
  if (httpcode === '200') {
    reData.Status = {httpmessage: 'success', data: data, code: '200'}
    res.status(200)
    res.send(reData)
  } else if (httpcode === '401') {
    reData.Status = {httpmessage: 'unauthorized', message: msgerror, code: '401'}
    res.status(401)
    res.send(reData)
  } else if (httpcode === '403') {
    reData.Status = {httpmessage: 'forbidden', message: msgerror, code: '403'}
    res.status(403)
    res.send(reData)
  } else if (httpcode === '404') {
    reData.Status = {httpmessage: 'notfound', message: msgerror, code: '404'}
    res.status(404)
    res.send(reData)
  } else if (httpcode === '400') {
    reData.Status = {httpmessage: 'badrequest', message: msgerror, code: '400'}
    res.status(400)
    res.send(reData)
  } else if (httpcode === '500') {
    reData.Status = {httpmessage: 'internaserver error', message: msgerror, code: '500'}
    res.status(500)
    res.send(reData)
  } else if (httpcode === '201') {
    reData.Status = {httpmessage: 'create success', data: data, code: '201'}
    res.status(201)
    res.send(reData)
  } else if (httpcode === '204') {
    reData.Status = {httpmessage: 'no content', code: '204'}
    res.status(204)
    res.send(reData)
  }
}
hp.convertArrToArrString = function convertArrToArrString (arr) {
  for (var key in arr) {
    if (arr.hasOwnProperty(key)) {
      for (var key1 in arr[key]) {
        if (arr[key].hasOwnProperty(key1)) {
          if (arr[key][key1] instanceof Date && !isNaN(arr[key][key1].valueOf())) {
            var unixTimestamp = (arr[key][key1].getTime() + arr[key][key1].getTimezoneOffset() * 60 * 1000) / 1000
            arr[key][key1] = unixTimestamp
            arr[key][key1] = arr[key][key1].toString()
          } else if (arr[key][key1] === null) {
            arr[key][key1] = ''
          } else {
            arr[key][key1] = arr[key][key1].toString()
          }
        }
      }
    }
  }
  return arr
}
hp.setDefaultParam = function setDefaultParam (_param) {
  if (_param === undefined) {
    return null
  } else if (_param === null || _param === 'NULL') {
    return null
  } else {
    return `'${_param}'`
  }
}
module.exports = hp

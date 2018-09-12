const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end()
  }
  const authToken = req.headers.authorization
  console.log(' authToken ==> ', authToken)
  try {
    jwt.verify(authToken, 'SECRET')
    console.log(1)
    next()
  } catch (err) {
    res.status(403).end()
  }
}

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  if (!req.headers['authorization']) {
    res.status(401).end()
    return
  }

  const authToken = req.headers['authorization']
  try {
    jwt.verify(authToken, 'SECRET')
    let data = jwt.decode(authToken, 'SECRET')
    if (data.role === 'Admin') {
      next()
    } else {
      res.status(403).json({error: 'You not permission for this api'}).end()
    }
  } catch (err) {
    res.status(403).json({error: err.message}).end()
  }
}

const auth = require("../services/auth")

module.exports = (req, res, next) => {
  const token  = req.headers.token
  auth.isValidToken(token)
    ? next()
    : res.status(401).send('Not authentified')
}
const uuid = require('uuid').v4
module.exports = {
  tokens: [],
  generateToken() {
    const token = uuid()
    this.tokens.push(token)
    return token
  },
  isValidToken(token) {
    return this.tokens.includes(token)
  }
}
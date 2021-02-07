const jwt = require('jsonwebtoken')

// days * hours * minutes * seconds
const maxAge = 1 * 24 * 60 * 60

const createToken = (id) => {
  return jwt.sign({ id }, 'secret', { expiresIn: maxAge })
}

module.exports = {
  createToken,
}

const { BadRequest } = require('http-errors')

const joiValidation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      throw BadRequest()
    }
    next()
  }
}

module.exports = joiValidation

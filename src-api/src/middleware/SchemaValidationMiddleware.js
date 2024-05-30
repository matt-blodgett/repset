const Ajv = require('ajv')

const AJV_OPTS = { allErrors: true }
const ajv = new Ajv(AJV_OPTS)

const authorizationSchemas = require('../authorization/schemas')
for (let key in authorizationSchemas) {
  ajv.addSchema(authorizationSchemas[key], key)
}

module.exports = {
  validate: (schemaKey) => {

    return (req, res, next) => {
      const { body } = req
      const checkValid = ajv.getSchema(schemaKey)
      const isValid = checkValid(body)

      if (isValid) {
        return next()
      }

      return res.status(400).send(
        {
          error: `${ajv.errorsText(checkValid.errors)}`
        }
      )
    }
  }
}

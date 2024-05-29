const router = require('express').Router()

const views = require('./views')

const SchemaValidationMiddleware = require('../middleware/SchemaValidationMiddleware')

router.post(
  '/auth',
  views.auth
)

router.post(
  '/signup',
  [
    SchemaValidationMiddleware.validate('signup')
  ],
  views.signup
)

module.exports = router

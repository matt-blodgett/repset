const router = require('express').Router()
const views = require('./views')

const schemaValidationMiddleware = require('../middleware/schemaValidationMiddleware')

router.post(
  '/auth',
  views.auth
)

router.post(
  '/validate',
  views.validate
)

router.post(
  '/signup',
  schemaValidationMiddleware.validate('signup'),
  views.signup
)

module.exports = router

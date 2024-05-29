const router = require('express').Router()

const controller = require('./controller')

router.post(
  '/auth',
  controller.auth
)

router.post(
  '/signup',
  controller.signup
)

module.exports = router

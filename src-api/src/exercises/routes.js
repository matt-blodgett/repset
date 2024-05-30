const router = require('express').Router()
const views = require('./views')

router.get(
  '/',
  views.list
)

module.exports = router

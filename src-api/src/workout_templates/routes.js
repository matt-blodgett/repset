const router = require('express').Router()
const views = require('./views')

router.get(
  '/',
  views.list
)

router.post(
  '/',
  views.create
)

router.delete(
  '/:workout_template_id',
  views.delete
)

module.exports = router

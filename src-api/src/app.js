const express = require('express')
const loggingMiddleware = require('./middleware/loggingMiddleware')
const tokenAuthenticationMiddleware = require('./middleware/tokenAuthenticationMiddleware')
const authorizationRoutes = require('./authorization/routes')
const exerciseRoutes = require('./exercises/routes')
const workoutTemplateRoutes = require('./workout_templates/routes')

const app = express()
app.use(express.json())
app.use(loggingMiddleware.basicLogging)
app.use(tokenAuthenticationMiddleware.tokenAuthentication)
app.use(tokenAuthenticationMiddleware.tokenAuthenticationErrorHandler)
app.use('/api', authorizationRoutes)
app.use('/api/exercises', exerciseRoutes)
app.use('/api/workout_templates', workoutTemplateRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

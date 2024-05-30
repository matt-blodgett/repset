const { expressjwt } = require('express-jwt')
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
  tokenAuthentication: expressjwt({
    secret: JWT_SECRET,
    algorithms: ['HS256'],
    onExpired: async (req, err) => {
      if (new Date() - err.inner.expiredAt < 5000) {
        return
      }
      throw err
    },
  }).unless({
    path: [
      '/api/auth',
      '/api/validate',
      '/api/signup'
    ]
  }),
  tokenAuthenticationErrorHandler: (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      if (err.inner.name === 'TokenExpiredError') {
        return res.status(401).send({
          error: 'token expired'
        })
      }
      return res.status(401).send({
        error: 'token invalid'
      })
    }
    return next(err)
  }
}

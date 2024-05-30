module.exports = {
  basicLogging: (req, res, next) => {
    const method = req.method
    const originalUrl = req.originalUrl
    res.on('finish', () => {
      const statusCode = res.statusCode
      console.log(`${method} ${originalUrl} ${statusCode}`)
    })
    next()
  }
}

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const db = require('../db')

const JWT_SECRET = process.env.JWT_SECRET


isEmailUnique = (email) => {
  const sql = `
  SELECT COUNT(*) as email_count
  FROM users
  WHERE email = ?
  `
  const params = [email]
  const stmt = db.prepare(sql)
  const result = stmt.get(params)
  return result.email_count === 0
}


module.exports = {
  auth: (req, res, next) => {
    const email = req.body['email']
    const password = req.body['password']

    const sql = `
    SELECT email, password, name
    FROM users
    WHERE email = ?
    `
    const params = [email]
    const stmt = db.prepare(sql)
    const user = stmt.get(params)

    if (!user) {
      return res.status(400).send({'error': 'incorrect email or password'})

    }

    const hash = user.password

    // TODO: async errors raised need to be passed to next()
    bcrypt.compare(password, hash, (err, result) => {
      if (!result) {
        return res.status(400).send({'error': 'incorrect email or password'})
      }

      const userProfile = {
        name: user.name,
        email: user.email
      }

      const token = jwt.sign(
        userProfile,
        JWT_SECRET,
        { expiresIn: 60 * 60 }
      )

      const data = {
        profile: userProfile,
        token: token
      }

      return res.status(200).send(data)
    })
  },
  signup: (req, res, next) => {
    const name = req.body['name']
    const email = req.body['email']
    const password = req.body['password']

    if (!isEmailUnique(email)) {
      return res.status(400).send({ error: 'email address already in use' })
    }

    const saltRounds = 10

    bcrypt.hash(password, saltRounds, (err, hash) => {
      const sql = `
      INSERT INTO users (name, email, password)
      VALUES (?, ?, ?)
      `
      const params = [name, email, hash]
      const stmt = db.prepare(sql)

      /*
        exceptions thrown in async functions need to be passed to
        express.js with next() or the entire server will crash...
      */
      try {
        stmt.run(params)
      } catch (err) {
        return next(err)
      }

      return res.status(201).send({ message: 'success' })
    })
  }
}

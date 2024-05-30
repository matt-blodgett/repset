const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../db')

const JWT_SECRET = process.env.JWT_SECRET

isEmailUnique = (email) => {
  const stmt = db.prepare(
    `
    SELECT COUNT(*) as email_count
    FROM users
    WHERE email = @email
    `
  )
  const result = stmt.get({
    email: email
  })
  return result.email_count === 0
}

module.exports = {
  auth: (req, res) => {
    const { email, password } = req.body

    const stmt = db.prepare(
      `
      SELECT id, email, password, name
      FROM users
      WHERE email = @email
      `
    )
    const user = stmt.get({
      email: email
    })

    if (!user) {
      return res.status(400).send({
        error: 'Incorrect email or password'
      })
    }

    const hash = user.password

    bcrypt.compare(password, hash, (err, result) => {
      if (!result) {
        return res.status(400).send({
          error: 'Incorrect email or password'
        })
      }

      const userProfile = {
        user_id: user.id,
        name: user.name,
        email: user.email
      }

      const token = jwt.sign(
        userProfile,
        JWT_SECRET,
        { expiresIn: 60 * 60 }
      )

      return res.status(200).send({
        profile: userProfile,
        token: token
      })
    })
  },
  validate: (req, res) => {
    const { type, value } = req.body

    let isValid = false
    if (type === 'email') {
      isValid = isEmailUnique(value)
    }

    return res.status(200).send({
      valid: isValid
    })
  },
  signup: (req, res, next) => {
    const { name, email, password } = req.body

    if (!isEmailUnique(email)) {
      return res.status(400).send({
        error: 'That email address is already in use'
      })
    }

    const saltRounds = 10

    bcrypt.hash(password, saltRounds, (err, hash) => {
      const stmt = db.prepare(
        `
        INSERT INTO users (name, email, password)
        VALUES (@name, @email, @hash)
        `
      )

      /*
        exceptions thrown in async functions need to be passed to
        express.js with next() or the entire server will crash...
      */
      try {
        stmt.run({
          name: name,
          email: email,
          hash: hash
        })
      } catch (err) {
        return next(err)
      }

      return res.status(201).send({
        message: 'success'
      })
    })
  }
}

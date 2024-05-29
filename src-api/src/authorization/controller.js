const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../db')

const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
  auth: (req, res) => {
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
      res.status(400).send({'error': 'incorrect email or password'})
      return
    }

    const hash = user.password

    bcrypt.compare(password, hash, (err, result) => {
      if (!result) {
        res.status(400).send({'error': 'incorrect email or password'})
        return
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

      res.status(200).send(data)
    })
  },
  signup: (req, res) => {
    const name = req.body['name']
    const email = req.body['email']
    const password = req.body['password']

    const saltRounds = 10

    bcrypt.hash(password, saltRounds, (err, hash) => {
      const sql = `
      INSERT INTO users (name, email, password)
      VALUES (?, ?, ?)
      `
      const params = [name, email, hash]
      const stmt = db.prepare(sql)
      stmt.run(params)

      res.status(201).send({'message': 'success'})
    })
  }
}

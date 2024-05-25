const express = require('express')
const app = express()
const PORT = process.env.PORT

const { expressjwt } = require('express-jwt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const bcrypt = require('bcrypt')
const db = require('better-sqlite3')('repset.db')


app.use(express.json())


app.use(
  expressjwt({
    secret: SECRET,
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
      '/api/register'
    ]
  })
)

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    if (err.inner.name === 'TokenExpiredError') {
      res.status(401).send({'error': 'token expired'})
    } else {
      res.status(401).send({'error': 'token invalid'})
    }
  } else {
    next(err)
  }
})


// app.use((req, res, next) => {
//   console.log(req.headers)
//   next()
// })


app.post('/api/register', (req, res) => {
  const username = req.body['username']
  const password = req.body['password']
  const email = req.body['email']

  const saltRounds = 10

  bcrypt.hash(password, saltRounds, (err, hash) => {
    const sql = `
    INSERT INTO users (username, password_hash, email)
    VALUES (?, ?, ?)
    `
    const params = [username, hash, email]
    const stmt = db.prepare(sql)
    stmt.run(params)

    res.status(200).send({'message': 'success'})
  })
})

app.post('/api/auth', (req, res) => {
  const username = req.body['username']
  const password = req.body['password']

  const sql = `
  SELECT password_hash, email
  FROM users
  WHERE username = ?
  `
  const params = [username]
  const stmt = db.prepare(sql)
  const user = stmt.get(params)

  if (!user) {
    res.status(400).send({'error': 'incorrect username or password'})
    return
  }

  const hash = user.password_hash

  bcrypt.compare(password, hash, (err, result) => {
    if (!result) {
      res.status(400).send({'error': 'incorrect username or password'})
      return
    }

    const userProfile = {
      username: username,
      email: user.email
    }

    const token = jwt.sign(
      userProfile,
      SECRET,
      { expiresIn: 60 * 60 }
    )

    const data = {
      profile: userProfile,
      token: token
    }

    res.status(200).send(data)
  })
})

app.get('/api/exercises', (req, res) => {
  const sql = `
  SELECT id, name, muscle_group
  FROM exercises
  `
  const params = []
  const stmt = db.prepare(sql)
  const rows = stmt.all(params)
  res.status(200).send(rows)
})

app.get('/api/workout_templates', (req, res) => {
  let sql = `
  SELECT id, name
  FROM workout_templates
  `
  let params = []
  let stmt = db.prepare(sql)
  let workout_templates = stmt.all(params)

  for (let i = 0; i < workout_templates.length; i++) {
    let sql = `
    SELECT id, exercise_id
    FROM workout_template_exercises
    WHERE workout_template_id = ?
    `
    let params = [workout_templates[i].id]
    let stmt = db.prepare(sql)
    let exercises = stmt.all(params)

    for (let j = 0; j < exercises.length; j++) {
      let sql = `
      SELECT id, name, muscle_group
      FROM exercises
      WHERE id = ?
      `
      let params = [exercises[j].exercise_id]
      let stmt = db.prepare(sql)
      let exercise = stmt.get(params)

      exercises[j]['exercise'] = exercise
      delete exercises[j]['exercise_id']
    }

    for (let j = 0; j < exercises.length; j++) {
      let sql = `
      SELECT id, set_number, weight, reps, rpe
      FROM workout_template_sets
      WHERE workout_template_exercise_id = ?
      `
      let params = [exercises[j].id]
      let stmt = db.prepare(sql)
      let sets = stmt.all(params)

      exercises[j]['sets'] = sets
    }

    workout_templates[i]['exercises'] = exercises
  }

  res.status(200).send(workout_templates)
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

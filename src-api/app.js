const express = require('express')
const app = express()
const port = 8000


const db = require('better-sqlite3')('repset.db')


app.use(express.json())


app.get('/api', (req, res) => {
  res.send('Hello World!')
})


app.get('/api/exercises', (req, res) => {
  const sql = 'SELECT id, name, muscle_group FROM exercises'
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


app.post('/api/test', (req, res) => {
  console.log(req.body)
  res.send('test')
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

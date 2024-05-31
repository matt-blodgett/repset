const db = require('../db')

module.exports = {
  list: (req, res) => {
    const stmt = db.prepare(
      `
      SELECT id, name
      FROM workout_sessions
      WHERE user_id = @user_id
      `
    )
    const workoutSessions = stmt.all({
      user_id: req.auth.user_id
    })

    for (let i = 0; i < workoutSessions.length; i++) {
      const stmt = db.prepare(
        `
        SELECT id, exercise_id
        FROM workout_session_exercises
        WHERE workout_session_id = @workout_session_id
        `
      )
      const workoutSessionExercises = stmt.all({
        workout_session_id: workoutSessions[i].id
      })

      for (let j = 0; j < workoutSessionExercises.length; j++) {
        const stmt = db.prepare(
          `
          SELECT id, name, muscle_group
          FROM exercises
          WHERE id = @exercise_id
          `
        )
        const exercise = stmt.get({
          exercise_id: workoutSessionExercises[j].exercise_id
        })

        workoutSessionExercises[j].exercise = exercise
        delete workoutSessionExercises[j].exercise_id
      }

      for (let j = 0; j < workoutSessionExercises.length; j++) {
        const stmt = db.prepare(
          `
          SELECT id, set_number, weight, reps, rpe
          FROM workout_session_sets
          WHERE workout_session_exercise_id = @workout_session_exercise_id
          `
        )
        const sets = stmt.all({
          workout_session_exercise_id: workoutSessionExercises[j].id
        })

        workoutSessionExercises[j].sets = sets
      }

      workoutSessions[i].exercises = workoutSessionExercises
    }

    return res.status(200).send(workoutSessions)
  },
  create: (req, res) => {
    const workoutSession = req.body

    const stmt = db.prepare(
      `
      INSERT INTO workout_sessions (user_id, name, created_at, updated_at)
      VALUES(@user_id, @name, datetime('now'), datetime('now'))
      `
    )
    const info = stmt.run({
      user_id: req.auth.user_id,
      name: workoutSession.name
    })

    const workoutSessionId = info.lastInsertRowid

    workoutSession.exercises.forEach((workoutSessionExercise) => {
      const stmt = db.prepare(
        `
        INSERT INTO workout_session_exercises (workout_session_id, exercise_id, created_at, updated_at)
        VALUES (@workout_session_id, @exercise_id, datetime('now'), datetime('now'))
        `
      )
      const info = stmt.run({
        workout_session_id: workoutSessionId,
        exercise_id: workoutSessionExercise.exercise.id
      })

      const workoutSessionExerciseId = info.lastInsertRowid

      workoutSessionExercise.sets.forEach((workoutSessionset) => {
        const stmt = db.prepare(
          `
          INSERT INTO workout_session_sets (workout_session_exercise_id, set_number, weight, reps, rpe, created_at, updated_at)
          VALUES (@workout_session_exercise_id, @set_number, @weight, @reps, @rpe, datetime('now'), datetime('now'))
          `
        )
        stmt.run({
          workout_session_exercise_id: workoutSessionExerciseId,
          set_number: workoutSessionset.set_number,
          weight: workoutSessionset.weight,
          reps: workoutSessionset.reps,
          rpe: workoutSessionset.rpe
        })
      })
    })

    workoutSession.id = workoutSessionId
    return res.status(201).send(workoutSession)
  },
  delete: (req, res) => {
    const stmt = db.prepare(
      `
      DELETE FROM workout_sessions
      WHERE id = @workout_session_id
      `
    )
    stmt.run({
      workout_session_id: req.params.workout_session_id
    })

    return res.status(200).send({})
  }
}

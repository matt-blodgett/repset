const db = require('../db')

module.exports = {
  list: (req, res) => {
    const stmt = db.prepare(
      `
      SELECT id, name
      FROM workout_templates
      WHERE user_id = @user_id
      `
    )
    const workoutTemplates = stmt.all({
      user_id: req.auth.user_id
    })

    for (let i = 0; i < workoutTemplates.length; i++) {
      const stmt = db.prepare(
        `
        SELECT id, exercise_id
        FROM workout_template_exercises
        WHERE workout_template_id = @workout_template_id
        `
      )
      const workoutTemplateExercises = stmt.all({
        workout_template_id: workoutTemplates[i].id
      })

      for (let j = 0; j < workoutTemplateExercises.length; j++) {
        const stmt = db.prepare(
          `
          SELECT id, name, muscle_group
          FROM exercises
          WHERE id = @exercise_id
          `
        )
        const exercise = stmt.get({
          exercise_id: workoutTemplateExercises[j].exercise_id
        })

        workoutTemplateExercises[j].exercise = exercise
        delete workoutTemplateExercises[j].exercise_id
      }

      for (let j = 0; j < workoutTemplateExercises.length; j++) {
        const stmt = db.prepare(
          `
          SELECT id, set_number, weight, reps, rpe
          FROM workout_template_sets
          WHERE workout_template_exercise_id = @workout_template_exercise_id
          `
        )
        const sets = stmt.all({
          workout_template_exercise_id: workoutTemplateExercises[j].id
        })

        workoutTemplateExercises[j].sets = sets
      }

      workoutTemplates[i].exercises = workoutTemplateExercises
    }

    return res.status(200).send(workoutTemplates)
  },
  create: (req, res) => {
    const workoutTemplate = req.body

    const stmt = db.prepare(
      `
      INSERT INTO workout_templates (user_id, name, created_at, updated_at)
      VALUES(@user_id, @name, datetime('now'), datetime('now'))
      `
    )
    const info = stmt.run({
      user_id: req.auth.user_id,
      name: workoutTemplate.name
    })

    const workoutTemplateId = info.lastInsertRowid

    workoutTemplate.exercises.forEach((workoutTemplateExercise) => {
      const stmt = db.prepare(
        `
        INSERT INTO workout_template_exercises (workout_template_id, exercise_id, created_at, updated_at)
        VALUES (@workout_template_id, @exercise_id, datetime('now'), datetime('now'))
        `
      )
      const info = stmt.run({
        workout_template_id: workoutTemplateId,
        exercise_id: workoutTemplateExercise.exercise.id
      })

      const workoutTemplateExerciseId = info.lastInsertRowid

      workoutTemplateExercise.sets.forEach((workoutTemplateSet) => {
        const stmt = db.prepare(
          `
          INSERT INTO workout_template_sets (workout_template_exercise_id, set_number, weight, reps, rpe, created_at, updated_at)
          VALUES (@workout_template_exercise_id, @set_number, @weight, @reps, @rpe, datetime('now'), datetime('now'))
          `
        )
        stmt.run({
          workout_template_exercise_id: workoutTemplateExerciseId,
          set_number: workoutTemplateSet.set_number,
          weight: workoutTemplateSet.weight,
          reps: workoutTemplateSet.reps,
          rpe: workoutTemplateSet.rpe
        })
      })
    })

    workoutTemplate.id = workoutTemplateId
    return res.status(201).send(workoutTemplate)
  },
  delete: (req, res) => {
    const stmt = db.prepare(
      `
      DELETE FROM workout_templates
      WHERE id = @workout_template_id
      `
    )
    stmt.run({
      workout_template_id: req.params.workout_template_id
    })

    return res.status(200).send({})
  }
}

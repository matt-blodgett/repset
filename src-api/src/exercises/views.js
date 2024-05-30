const db = require('../db')

module.exports = {
  list: (req, res) => {
    const stmt = db.prepare(
      `
      SELECT id, name, muscle_group
      FROM exercises
      WHERE user_id IS NULL
      OR user_id = @user_id
      `
    )
    const rows = stmt.all({
      user_id: req.auth.user_id
    })
    return res.status(200).send(rows)
  }
}

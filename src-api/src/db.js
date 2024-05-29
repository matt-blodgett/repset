const PATH_DB = process.env.PATH_DB
const db = require('better-sqlite3')(PATH_DB)

module.exports = db

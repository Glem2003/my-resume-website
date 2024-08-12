const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/users.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        username TEXT NOT NULL PRIMARY KEY,
        identity TEXT NOT NULL,
        password TEXT NOT NULL
    )`);
});

module.exports = db;
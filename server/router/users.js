const express = require('express');
const router = express.Router();
const db = require('../module/db');
const bcrypt = require('bcrypt');

router.get('/users', (req, res) => {
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            res.status(500).send('Error retrieving users');
        } else {
            res.json(rows);
        }
    });
});

router.post('/register', (req, res) => {
    const { username, identity, password } = req.body;
    db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
        if (err) {
            res.status(500).send('Error checking user');
        } else if (row) {
            res.json({ success: false, message: 'User already exists' });
        } else {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    res.status(500).send('Error hashing password');
                } else {
                    db.run(`INSERT INTO users (username, identity, password) VALUES (?, ?, ?)`, [username, identity, hash], (err) => {
                        if (err) {
                            res.status(500).send('Error registering user');
                        } else {
                            res.json({ success: true });
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;
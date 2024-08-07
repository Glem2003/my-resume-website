const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const users = new sqlite3.Database('./database/users.db');
const projects = new sqlite3.Database('./database/projects.db');

app.use(bodyParser.json());
app.use(cors());

// 創建 users 資料表
users.serialize(() => {
    users.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )`);
});

// 創建 projects 資料表
projects.serialize(() => {
    projects.run(`CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )`);
});

const PORT = 3000;
app.listen(() => {
    console.log(`Server is running on port ${PORT}`);
});
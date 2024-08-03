const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;
app.listen(() => {
    console.log(`Server is running on port ${PORT}`);
});
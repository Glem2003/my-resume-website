const express = require('express');

const app = express();


const PORT = 3000;
app.listen(() => {
    console.log(`Server is running on port ${PORT}`);
});
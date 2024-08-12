const express = require('express');
const configureApp = require('./middleware/config'); // 引入配置模組
const userRoutes = require('./router/users');

const app = express();

configureApp(app); // 應用配置

app.use('/', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
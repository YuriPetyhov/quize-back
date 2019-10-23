const express = require('express');
const app = express();
const registratonRoutes = require('./routes/registrationRoutes')
const loginRoutes = require('./routes/loginRouters')

app.use('/registration', registratonRoutes)
app.use('/login', loginRoutes)

module.exports = app;

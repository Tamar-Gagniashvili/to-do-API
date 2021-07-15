const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Routes
const todoRouter = require('./routes/todo');

//
const app = express();




// Routes
app.use('/api/todo', todoRouter);


const PORT = process.env.PORT || 5000;
// const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started On ${PORT}`));



module.exports = app;
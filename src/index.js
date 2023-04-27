const path = require('path');
const engine = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3333;
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

// Template engine

app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

// router

route(app);

// port

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

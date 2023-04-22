const path = require("path")
const engine = require("express-handlebars")
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')))

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({ extname: ".hbs" }));
app.set('view engine', 'hbs')
app.set("views", path.join(__dirname, "resources/views"))


// router
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/technology', (req, res) => {
  res.render('technology');
})
app.get('/company', (req, res) => {
  res.render('company')
})
app.get('/learn', (req, res) => {
  res.render('learn')
})
app.get('/about-me', (req, res) => {
  res.render('about-me')
})






// port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

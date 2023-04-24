const path = require("path")
const engine = require("express-handlebars")
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({ extname: ".hbs" }));
app.set('view engine', 'hbs')
app.set("views", path.join(__dirname, "resources/views"))


// router

//  req = request 
// res = response

const search = function(request){
  return request.query
}
app.get('/', (req, res) => {
  console.log(search(req).search)
  res.render('home');
})
app.get('/technology', (req, res) => {
  console.log(req.query)
  res.render('technology');
})
app.get('/company', (req, res) => {
  res.render('company')
})
app.get('/learn', (req, res) => {
  res.render('learn')
})

app.post('/',(req,res)=>{
  res.send('')
})
// app.post('/learn', (req, res) => {
//   res.render('learn')
// })
app.get('/about-me', (req, res) => {
  res.render('about-me')
})






// port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

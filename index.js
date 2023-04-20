const morgan = require('morgan')
const express = require('express')
const app = express()
const port = 3000
app.use(morgan('combined'))
app.get('/', (req, res) => {
  res.send(`
  <h1>Hello world</h1>
  `)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()
const bookRouter = require('./routeFold/book.js')
const port = 3000


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.use(bookRouter)



app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
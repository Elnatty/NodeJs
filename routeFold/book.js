const express = require('express')
const bookRouter = express.Router()

bookRouter
  .route('/book')
  .get((req, res) => {
    res.send('All Books')
  })
  .post((req, res) => {
    res.json({data: "Book is stored"})
  })


bookRouter
  .route('/book/:id')
  .get((req, res) => {
    res.send(`<h1>single book of ID: ${req.params.id}</h1>`)
  })
  .patch((req, res) => {   // update book
    res.send(`<h1>single book of ID: ${req.params.id} to update</h1>`)
  })
  .delete((req, res) => {  // delete book
    res.send(`<h1>single book of ID: ${req.params.id} to delete</h1>`)
  })



module.exports = bookRouter
const express = require('express')
const app = express()

app.post('/quotes', (req, res) => {
  res.status(201).json({ successMessage: 'You created a new quote successfully' })
})

app.put('/quotes/:id', (req, res) => {
  res.status(200).json({ successMessage: `You updated the quote with id ${req.params.id} successfully` })
})

app.delete('/quotes/:id', (req, res) => {
  res.status(200).json({ successMessage: `You deleted the quote with id ${req.params.id} successfully` })
})

app.listen(process.env.PORT || 9000, () => {
  console.log('app started')
})

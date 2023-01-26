const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.post('/quote', (req, res) => {
  res.status(201).json({ successMessage: 'You created a new quote successfully' })
})

app.put('/quotes/:id', (req, res) => {
  res.json({ successMessage: `You updated the quote with id ${req.params.id} successfully` })
})

app.delete('/quotes/:id', (req, res) => {
  res.json({ successMessage: `You deleted the quote with id ${req.params.id} successfully` })
})

app.use('*', (req, res) => {
  res.json({ successMessage: 'API is up' })
})

app.listen(process.env.PORT || 9000, () => {
  console.log('app started')
})

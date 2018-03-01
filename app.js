const express = require('express')
const app = express()

app.get('/hello/:name', (req, res) => {
  const { name } = req.params
  res.send(`Hello ${name}`)
})

app.listen(3000)

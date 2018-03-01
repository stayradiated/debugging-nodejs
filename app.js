const express = require('express')
const app = express()

app.get('/hello/:name', (req, res) => {
  const { name } = req.params
  res.send(`Hello ${name} from ${req.ip}`)
})

app.listen(3000)

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/index', (req, res) => {
  res.sendFile('templates/index.html',{root:__dirname})
})
app.get('/download', (req, res) => {
  res.download('templates/walpaper.jpg',{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

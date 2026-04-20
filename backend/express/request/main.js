const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('this is a get request!')
  console.log("this is a get request!")
})
app.post('/', (req, res) => {
  res.send('this is a post request')
  console.log("this is a post request!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

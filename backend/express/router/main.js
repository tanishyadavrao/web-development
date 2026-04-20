const express = require('express')
const blog=require('./routes/main2')
const app = express()
const port = 3000

app.use('/blog',blog);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

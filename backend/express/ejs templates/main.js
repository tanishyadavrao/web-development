const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');

app.get('/', (req, res) => {   //kisi ek website ko apne server pe render krvao and usme variables ko templates ki help se database k according change krna h
    let siteName="sitename1";
    let name="Tanish";
    let arr=["hello",1,3,6,8]  //arrays can also be rendered
  res.render("index",{arr,siteName:siteName,name:name,});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

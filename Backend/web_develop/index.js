require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()
const port = 4000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
 res.send('anilkatwal')
})
app.get('/login',(req,res)=>{
    res.send('<h1> please login at web page</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h1> Meet in You youtube platform</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
 const express = require('express')

const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

app.get('/set-cookie', (req,res)=>{
// res.setHeader('set-cookie', 'foo=bar')
// res.setHeader('set-cookie', 'fizz=bar')
 res.cookie('fizc','bar',{
    // maxAge: 5000,
   // expires: new Date('26 JULY 2021'),
    httpOnly: true,
   secure: true,
   

 })
//res.cookie('pavan', 'raghavendra')
 res.send('cookie is set foo=bar')
 
})

app.get('/get-cookie',(req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies)
})

app.get('/del-cookie',(req,res)=>{
    res.clearCookie('pavan');
    res.send("cookie has been deleted")

})
    
app.get('/', (req,res)=>{
    res.send('hello')
})
app.listen(9000, ()=>{
    console.log('server started on port 3000')
})
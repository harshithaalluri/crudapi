
const express= require('express')  
// Body parsers for getting the data thrugh urls 

const bodyparser=require('body-parser')
// Const app controls the entire app with express functional constructor
const app=express()

// We are saying expressjs that to use body parser urlencoded to be parsed
app.use(bodyparser.urlencoded({extended:true}))

// Create Route with Creating the quote
app.post('/quotes',(req,res)=>
{
   res.send(req.body)
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html')
})

const PORT=3000

app.listen(PORT,()=>{

    console.log(`server running at port ${PORT}`)

})
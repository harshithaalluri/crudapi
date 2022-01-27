//import expressjs for creating the server and creating api routes
const express= require('express') 


// Body parsers for getting the data thrugh urls 
const bodyParser=require('body-parser')


// Importing Mongo client
const MongoClient=require('mongodb').MongoClient


// Const app controls the entire app with express functional constructor
const app=express()

// We are saying expressjs that to use body parser urlencoded to be parsed
app.use(bodyParser.urlencoded({extended:true}))

// Datatbase Connection string
const connectionString="mongodb+srv://harshithaalluri:Alluri1234@cluster0.chyl9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//Connecting the database
MongoClient.connect(connectionString,(err,client)=>{
    if(err) return console.err(err)
    
    console.log('connected to database')
})

// Create Route with Creating the quote.two parameters 1.route 2.function
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


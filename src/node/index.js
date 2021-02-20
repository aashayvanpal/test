const serveIndex = require('serve-index')
const express = require('express')
const app = express()

// middleware functions

app.use((req,res,next)=>{
    console.log(`Time :`,Date.now())
    next()
})

app.use('/nest',(req,res,next)=>{
    console.log("inside /nest")
    console.log("Request type : ",req.method)

    res.send("I am inside nest")
    next()

})

app.use("/gators",express.static('public'))
app.use("/gators",serveIndex('public'))


app.get('/',(req,res)=>{
    res.send("Test app is running use !")
})




app.listen(3000 , ()=>{
    console.log("listening to port :3000")
})


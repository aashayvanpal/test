const express = require('express')
const mongoose = require('mongoose')
const foodRouter = require('./routes/foodRoutes.js')

const app = express()
app.use(express.json())

app.use(foodRouter)
mongoose.connect('mongodb+srv://aashay:nanekure123@cluster-main.u9ycr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const port = 3001

app.get('/',(req, res) => {
    res.send("you are in server.js")
});

app.listen(port, () => {
    console.log(`the server is running on ${port}`)
})
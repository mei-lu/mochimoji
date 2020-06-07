const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8000;
var db = mongoose.connection
const cors = require('cors')
require('dotenv/config')


//Database
mongoose.connect(process.env.DB_CONNECTION,
{useUnifiedTopology: true, useNewUrlParser: true})
.then( () => console.log("connected to db"))

//Middleware
app.use(express.urlencoded({  extended: true }))
app.use(express.json())
app.use(cors())

//Routes

const postsRoute = require('./routes/posts')
app.use('/kaomojis', postsRoute)

//Start Server

app.listen(process.env.PORT || port, () => {
    console.log("it's live! <3")
})
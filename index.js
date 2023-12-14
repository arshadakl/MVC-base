const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Finex")

const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, "public")));

const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')



app.use('/',userRouter)
app.use('/admin',userRouter)

app.listen(8080,()=>{
    console.log("Server Running...");
})
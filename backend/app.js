const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const userRouter = require("./router/UseRouters")
const app = express();
app.use(bodyparser.json());
app.use(cors());
require('dotenv').config();
//1. model
//2. controller
//3.router
//1.postman
//2.thunderclint -> extension

// console.log(process.env.dum);
console.log("DB_URL:", process.env.DB_URL);

const mongoDB_url = process.env.DB_URL;
mongoose.connect(mongoDB_url)
    .then(()=> console.log("data base connected"))
    .catch((er)=>console.log(er));

app.get('/mydata', (req,res)=>{
    console.log("data moving");
    res.send({"myname":"hello iam here"});
})

app.get("/get-data", (req,res)=>{
    console.log("data moving");
    res.send({"name":"aditya","pass":"12345678"})
})

app.get("/godata", (req,res)=>{
    console.log("data moving");
    res.send({"name":"aditya","pass":"12345678"})
})

app.use('/api',userRouter);

app.listen(7000, ()=>{
    console.log("server running at port 7000")
})







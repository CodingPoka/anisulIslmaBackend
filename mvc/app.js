const express = require('express');
const app=express();

const userRouter=require("./routes/user.route.js");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(userRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to my first express js server");
})





module.exports=app;
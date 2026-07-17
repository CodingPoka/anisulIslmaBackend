
const express = require('express');
const app=express();



app.get("/",(req,res)=>{
    res.send("Welcome to my first express js server");
})

app.get("/login",(req,res)=>{
    res.send("This is a login page");
})

app.get("/register",(req,res)=>{
    res.send("This is a register page");
})

app.post("/",(req,res)=>{
    res.send("This is a post request");
})


app.put("/",(req,res)=>{
    res.send("This is a put request");
})

app.delete("/",(req,res)=>{
    res.send("This is a delete request");
})



module.exports=app;
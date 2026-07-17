
const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my first express js server");
})

app.get("/about",(req,res)=>{
    res.send("This is about page");
})

module.exports = app;
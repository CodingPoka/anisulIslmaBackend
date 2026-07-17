
const express = require('express');
const app=express();

const userRouter=require("./routes/users.route.js");



app.use("/api/users/",userRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to my first express js server");
})


//when someone tries to access a route which is not defined in our server then we will send a 404 error page
app.use((req,res)=>{
   res.status(404).send("404 error page not found");
})


module.exports=app;
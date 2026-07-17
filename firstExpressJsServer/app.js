
const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    const id=req.query.id;
    const name=req.query.name;
     
    res.status(200).json({
        id: id,
        name: name
    })
})

app.get("/about",(req,res)=>{
    res.send("This is about page");

})



module.exports = app;
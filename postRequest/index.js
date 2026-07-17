

const express=require("express");
require("dotenv").config();
const app=express();
const port=process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());


const checkLogin= (req,res,next)=>{ 
    console.log("checking login");
    next();

}

app.get("/about",checkLogin,(req,res)=>{
    
    res.send("Welcome to about page");

})

app.get("/",(req,res)=>{
    res.send("Welcome to my first express js server");
})


app.post("/users",(req,res)=>{
    const name=req.body.name;
    const id=req.body.id;
    res.status(200).json({
        name: name,
        id: id
    })
})


app.listen(port,()=>{
    console.log(`Server is running successfully on http://localhost:${port} `);
})
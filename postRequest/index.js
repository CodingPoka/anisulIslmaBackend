

const express=require("express");
const app=express();
const port=3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());


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
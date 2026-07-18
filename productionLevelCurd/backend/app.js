
const express=require("express");
const app=express();

const productRouter=require("./routes/product.route");



app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use("/api/product", productRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to home page");
})


module.exports=app;
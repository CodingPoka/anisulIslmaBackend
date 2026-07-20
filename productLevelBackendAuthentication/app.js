
const express=require("express");
const app=express();
const cors=require("cors");

const productRouter=require("./routes/product.route");



app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use("/api/products", productRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to home page");
})


module.exports=app;
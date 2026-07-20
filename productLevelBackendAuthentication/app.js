
const express=require("express");
const app=express();
const cors=require("cors");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const authRouter=require("./route/auth.route");
const adminRoute=require("./route/admin.route");

app.use("/api",authRouter);

//admin route
app.use("/api/admin", adminRoute);

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);



app.get("/",(req,res)=>{
    res.send("Welcome to home page");
})


module.exports=app;
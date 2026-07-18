

const express = require("express");
const mongoose=require("mongoose");
const app = express();

const port=5000;

const dns = require("dns");
dns.setServers(["8.8.8.8"]);



const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://admin:admin1234@cluster0.p11nqls.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected successfully");
    }catch(error){
        console.log("MongoDB connection failed",error);
        process.exit(1);
    }
}

app.get("/",(req,res)=>{
    res.send("Hello from express server");
});


app.listen(port,async()=>{
    console.log(`Server is running successfully on http://localhost:${port}`);
    await connectDB();
});
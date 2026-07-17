
const express=require("express");
const router=express.Router();




router.get("/login",(req,res)=>{
    res.send("This is a login page");
})

router.get("/register",(req,res)=>{
    res.send("This is a register page");
})

router.post("/",(req,res)=>{
    res.send("This is a post request");
})


router.put("/",(req,res)=>{
    res.send("This is a put request");
})

router.delete("/",(req,res)=>{
    res.send("This is a delete request");
})


module.exports=router;
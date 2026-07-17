
const express=require("express");
const router=express.Router();




router.get("/login",(req,res)=>{
    res.cookie("name", "kingshuk");
    res.cookie("id", "12345");
    res.status(200).json({
        message:"This is a login page",
        success:true,
        statusCode:200
     })
 
     res.end();

})

router.get("/register",(req,res)=>{
     res.status(200).json({
        message:"This is a register page",
        success:true,
        statusCode:200
     })
  
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
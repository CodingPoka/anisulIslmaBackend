

const express=require("express");
const app=express();
const port=4000;
const Joi=require("joi");


app.use(express.urlencoded({extended:true}));
app.use(express.json());




app.post("/api/register",(req,res)=>{
    try{
        const {name,email,password}=req.body;

        //data validatoin using joi
        //setp1: create a schema
      const schema= Joi.object({
            name: Joi.string().min(3).max(31).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(8).required()
        })

        //step2: validating data using schema
        const {error} = schema.validate(req.body);


        if(error){
            return res.status
        }

        return res.status(200).json({
            message: "User registerd successfully",
            success:true,
            users: error.details
        })

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})


app.get("/",(req,res)=>{
    res.send("Welcome to home");
})

app.listen(port,()=>{
   console.log(`Server is running successfully on http://localhost:${port}`);
})
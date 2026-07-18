

const express=require("express");
const app=express();
const mongoose=require("mongoose");

const port=5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json())

const dns=require("dns");
dns.setServers(["8.8.8.8"]);
const connectDB= async()=>{
    try{
        await mongoose.connect("mongodb+srv://admin:admin1234@cluster0.p11nqls.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected successfully");
    }catch(error){
        console.log("MongoDB connection failed",error);
        process.exit(1);
    }
}

//creating proudct schema
//A schema is a blueprint of how the data will look like in the database. It defines the structure of the documents, including the fields and their data types, as well as any validation rules or default values.

const productSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,

    },
    price: Number,
    description: String,
    createdAt: {
        type: Date,
        default : Date.now()
    }

})

//create product model

const Product= mongoose.model("Products", productSchema);



app.get("/", (req,res)=>{
    res.send("Hello from express server");
    
});

//creaet new proudct
app.post("/products", async (req,res)=>{
    try{
        const {title, price,description}=req.body;
         

        //create new proudct
        const newProduct= new Product({
            title, price, description
        })

        //save the new prouduct in mongodb
        const productData= await newProduct.save();
        res.status(201).json({
             message: "Product Added Successfully",
             success:true,
             data: productData,
             
        })

    }catch(error){
        res.status(500).send({
            message: error.message
        })
    }
})

//get all products

app.get("/products", async (req,res)=>{
    try{

        const products = await Product.find();
        
        if(products){
            res.status(200).json({
                message: "product fetchd successfully",
                success: true,
                data: products
            })
        }else{
            res.status(404).json({
                message: "Product not found",
                success: false
            })
        }


    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})

//get single proudct by id

app.get("/products/:id",async(req,res)=>{
    try{
        const id= req.params.id;
        const products = await Product.find({_id:id});
        if(products){
            res.status(200).json({
                message: "Fetch single product successfully",
                success:true,
                data: products
            })
        }else{
            res.status(404).json({
                message: "product not found",
                success: false
            })
        }

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}
    )

//delete proudcut by proudct id

app.delete("/products/:id", async(req,res)=>{
    try{
        const id=req.params.id;

        //delete prouduct
        const product = await Product.deleteOne({_id: id});
        if(product){
            res.status(200).json({
                message:"product delted successully",
                success: true,
                data:product
            })
        }else{
            res.status(404).json({
                message: "product not found of this id",
                success:false
            })
        }

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})

//update the product
   app.put("/products/:id", async(req,res)=>{
    try{
        const id=req.params.id;
        const {title, price}=req.body;
        const updatedProduct = await Product.findByIdAndUpdate({
            _id:id
        },{
            $set:{
                title:title,
                price:price
            }
        })

        return res.status(200).json({
            message:"product updated successfully",
            success:true,
            data: updatedProduct
        })

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
   })




app.listen(port, async()=>{
    console.log(`Server is running successfully on http://localhost:${port}`);
    await connectDB();
})
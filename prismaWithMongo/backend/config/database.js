

const prisma = require("./prisma");


const connectDB= async()=>{
    try{
        await prisma.$connect();
        console.log("Database is connected Successfully");
    }catch(error){
        console.error("Database connection failed : ", error.message);
        process.exit(1);
    }
}


module.exports= connectDB;
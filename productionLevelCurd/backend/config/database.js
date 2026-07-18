
const mongoose=require("mongoose");


const dns=require("dns");
dns.setServers(["8.8.8.8"]);

const connectDB= async()=>{
    try{
        //if there is no db_url in .env file
         if (!process.env.DB_URL) {
            throw new Error("DB_URL is missing in environment variables.");
        }

        await mongoose.connect(process.env.DB_URL);
        console.log("Database is connected Successfully");

    }catch(error){
        console.log("Database Connection Error : ",error.message);
        process.exit(1);
    }
}

module.exports=connectDB;
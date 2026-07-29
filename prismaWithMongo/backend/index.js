
//load env first
require("dotenv").config();

const app=require("./app");
const connectDB = require("./config/database");


const port=process.env.PORT || 3000;





app.listen(port, async ()=>{
    console.log(`Server is running successfully on http://localhost:${port}`);
    await connectDB();
})
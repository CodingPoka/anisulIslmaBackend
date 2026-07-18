
const app=require("./app");
const connectDB = require("./config/database");
require("dotenv").config();

const port=process.env.PORT || 5000;





app.listen(port, async ()=>{
    console.log(`Server is running successfully on http://localhost:${port}`);
    await connectDB();
})
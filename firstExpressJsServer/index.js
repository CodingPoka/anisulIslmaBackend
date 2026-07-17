

const app=require("./app.js");
const port = 3000;


app.get("/",(req,res)=>{
    res.send("Welcome to my first express js server");
})

app.listen(port,()=>{
    console.log(`Server is running successfully on http://localhost:${port} `);
})
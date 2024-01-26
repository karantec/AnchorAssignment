

const express = require("express");
const app= express();

// const cors=require("cors");

const PORT = process.env.PORT || 5000;


//middleware
app.use(express.json());
// app.use(cors());

require("./config/database").connect();

const user = require("./routes/user");
app.use("/api/v1",user);



app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
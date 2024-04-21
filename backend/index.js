const express = require("express");
const { connectionToDb } = require("./config/dbConfig");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server is running");
})


app.listen(8080, async()=> {
    await connectionToDb();
    console.log("Server is running at port number 8080")
})



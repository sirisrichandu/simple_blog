const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware

app.use(cors());
app.use(express.json());
app.use("/api/blogs",require("./routes/blogRoutes"));

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// test route
app.get("/", (req,res)=>{
    res.send("API Running");
});

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});
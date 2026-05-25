const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// VERY IMPORTANT
app.options("*", cors());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://simple-blog-omega-puce.vercel.app",
      "https://simple-blog-rd2o7o30f-sirisrichandus-projects.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true
  })
);

app.use(express.json());

app.use("/api/blogs", require("./routes/blogRoutes"));

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
 console.log("MongoDB Connected");
})
.catch((err)=>{
 console.log(err);
});

app.get("/",(req,res)=>{
 res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
 console.log(`Server running on port ${PORT}`);
});
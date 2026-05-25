const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Blog Routes
app.use("/api/blogs", require("./routes/blogRoutes"));

// TEST ROUTE
app.get("/test", (req, res) => {
    res.send("test working");
});

// Root Route
app.get("/", (req, res) => {
    res.send("API Running");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB Error:", err);
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
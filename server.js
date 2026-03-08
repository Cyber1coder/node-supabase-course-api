const express = require("express");
const cors = require("cors")
require("dotenv").config();

const logger = require("./middleware/logger");

const courseRoutes = require("./routes/courses");

const app = expess();

app.use(cors());
app.use(express.json());

app.use(logger);

app.use("/",courseRoutes);

const PORT = 5000;

app.listen(PORT,()=>{
    console.log("Server running on port 5000");
    
})
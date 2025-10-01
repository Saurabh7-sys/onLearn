const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err))


app.get("/", (req, res) => {
    res.send("backend running")
});

const blogRoutes = require("./routes/blogs");
app.use("/blogs" , blogRoutes)

const aboutRoutes = require('./routes/about');
app.use("/about" , aboutRoutes)

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfig = require("./config/keys").mongoURI;

const app = express();

//middleware
app.use(bodyParser.json());

//routes
const comments = require("./routes/api/comments")
app.use("/api/comments", comments)

//db connection
mongoose.connect(dbConfig)
    .then(() => console.log("Connected to db"))
    .catch(err => console.log(err));

//start app
const port = process.env.PORT || 5000;

app.listen(port);
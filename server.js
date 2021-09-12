const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const config = require("dotenv").config();
const apiRoutes = require("./routes/apiRoute.js");
const htmlRoutes = require("./routes/htmlRoute.js");

const PORT = process.env.PORT || 3002;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout" || process.env.DB_CLIENT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
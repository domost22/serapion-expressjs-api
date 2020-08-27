const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config();
const apiRouter = require('./src/routes/api');
const TvMediaDatabase = require("./src/database/mongoose/model/TvMediaDatabaseModel");

const MONGODB_URL = process.env.MONGODB_URL;
const mongoose = require("mongoose");

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  if(process.env.NODE_ENV !== "test") {
    console.log("Connected to %s", MONGODB_URL);
    console.log("App is running ... \n");
    console.log("Press CTRL + C to stop the process. \n");
  }
})
    .catch(err => {
      console.error("App starting error:", err.message);
      process.exit(1);
    });
var db = mongoose.connection;
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/", apiRouter);

// throw 404 if URL not found
app.all("*", function(req, res) {
    return res.status(404).json(res);
});

// error handler
app.use(function(err, req, res, next) {
    return res.status(500).json(err.status);
});

module.exports = app;

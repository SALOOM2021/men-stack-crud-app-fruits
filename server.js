// Here is where we import modules
// We begin by loading Express
const dotenv = require("dotenv"); // require package
dotenv.config(); 
const databaseFile= require('./config/database')
const express = require('express');

const morgan = require('morgan');

// Modelus
const Fruit = require("./models/fruit.js");
const app = express();

// MIDDLEWARE
app.use(morgan('dev'));

// ROUTES
// server.js
// GET /fruits/new
// server.js

// GET /fruits/new
app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs");
  });
  
  
// GET /
// server.js

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });
  
  
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
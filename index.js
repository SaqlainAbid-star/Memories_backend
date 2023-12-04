const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");
const app = express();
import postRoutes from './routes/posts.js'
const mongoose = require("./models/db/connection");


app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
); // use cors middleware for all routes

app.use(
  express.urlencoded({
    extended: true,
  })
);

// use all different methods on that app instance
// sending some images large in size
// setting up the body parser to properly send our requests
// app.use(bodyParser.json({limit: '30mb',extended: true}));
// app.use(bodyParser.urlencoded({limit: '30mb',extended: true}));

app.get("/", (req, res) => {
    res.send("Sever is Running");
  });
  

// we can use express middleware to connect routes to our application
// First parameter: set up the starting path for all the routes
// every route inside of the post routes is going to start with posts that means that this route inside of posts.js is not reached by going to localhost:5000/ 
// it's reached by going to localhost:5000/posts because we added a prefix of posts to all routes
app.use('/posts',postRoutes);


app.listen(5000, () => {
    console.log("Your server is running on 5000");
  });
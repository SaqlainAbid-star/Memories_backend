import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

// initialize this app
const app = express();

// use all different methods on that app instance
// sending some images large in size
// setting up the body parser to properly send our requests
app.use(bodyParser.json({limit: '30mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb',extended: true}));
app.use(cors())

// we can use express middleware to connect routes to our application
// First parameter: set up the starting path for all the routes
// every route inside of the post routes is going to start with posts that means that this route inside of posts.js is not reached by going to localhost:5000/ 
// it's reached by going to localhost:5000/posts because we added a prefix of posts to all routes
app.use('/posts',postRoutes);

// connect our server application with a real database mongodb 
// host our database on their cloud 
// const Connection_URL = 'mongodb://127.0.0.1:27017/memoriesProject';
const Connection_URL = 'mongodb+srv://Saqlain:Saqlain123@cluster0.oo31c.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

// mongoose to connect to our database
mongoose.connect(Connection_URL,{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(PORT,()=> console.log(`Server running on port : ${PORT}`)) )
.catch((error)=>console.log("Error is this",error.message));
// mongoose.set('useFindAndModify', false);


// we are connected to the database we can start creating routes for our backend application
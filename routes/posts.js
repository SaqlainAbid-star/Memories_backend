import express from "express";
import { getPosts, createPosts, updatePost } from "../controllers/posts.js";  // In node we write posts.js...In react only posts

// set up our router
const router = express.Router();

// path is slash /
// here we can specify a callback function that is going to be executed once someone visits localhost:5000/
// In here we have request and response it's the same thing for every single callback function
router.get('/', getPosts)
router.post('/', createPosts)
// implement the update route, patch is used for updating existing documents
// for updating we need to know the id of the existing post
// call our new function update post
router.patch('/:id', updatePost)



// In controllers/posts.js. we are going to create all the handlers for our routes. 
// we can extract all the functions or all the logic from the routes and then take it in the controllers/posts.js


// export the whole router
// In index.js import that router
export default router;
// This gives access to a real model
import  Mongoose  from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req,res)=>{
  try {
      // retrieve all the posts that we currently have in the database
      // post message finds something inside of a model takes time which means that it is an asynchronous action
      const postMessages = await PostMessage.find()

      // If everything is okay then it returns json which is going to simply be an array of all messages 
      res.status(200).json(postMessages)
      
  } catch (error) {
      res.status(404).json({message : error.message})
  }
}


export const createPosts = async (req,res) =>{
    // with post requests you have access to something known as a request.body
    // request.body is actually our post so we name it post 
    const post = req.body;
    
    // to create a new post 
    // call PostMessage and then in there pass that values that we're receiving from the request.body
    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }

}


export const updatePost = async (req,res) =>{
    // extract that id from request.params, /posts/123
    // using object destructuring we can also rename our properties and in this case we rename our id to _id
    const {id: _id } = req.params;
    const post = req.body;

    // checking if this _id is a mongoose object id or not?
    if(!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
    // if the id is valid then we can update our post,
    // In second parameter pass the whole updated post, 
    // receiving it from the request.body that is sent from the front end 
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new:true});
    res.json(updatedPost)

}
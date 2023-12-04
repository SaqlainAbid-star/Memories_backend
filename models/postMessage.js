import  Mongoose  from "mongoose";

// utilize the possibilities of mongoose
// mongoose.schema is a function which have an object
// mongoose allows us to give some sort of uniformity to our documents
// To specify that each post have these things
const postSchema = Mongoose.Schema({
    creator: String,
    title: String,
    message: String,
    tags: [String],        // Array of strings
    selectedFile: String,  // to convert an image into a string using that base64
    likeCount: {           // An object of type number and default value of 0
        type: Number,
        default: 0
    },
    createdAt: {            // An object of type date and default value of new date
        type: Date,
        default: new Date()
    }
})

// turn schema into a model
const PostMessage = Mongoose.model('PostMessage',postSchema);

// exporting a mongoose model from the post message file
// then on that model later we'll run commands such as find create delete and update
export default PostMessage;

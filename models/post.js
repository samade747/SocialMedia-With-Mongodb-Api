import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        max: 200,
    },
    image:{
        type:String,
    },
    likes:{
        type: Array,
        default: [],
    },
}, 
{ timestamps: true}

);

export const Post = mongoose.model('Post', PostSchema);

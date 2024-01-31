// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//     username:{
//         type:String,
//         require: true,
//         min: 3,
//         max: 20,
//         unique: true
//     },
//     email:{
//         type: String,
//         required: true,
//         max: 50,
//         unique: true
//     },
//     password:{
//         type:String,
//         required: true,
//         min:6,        
//     },
//     profilePicture:{
//         type:String,
//         default: ""
//     },
//     coverPicture:{
//         type:String,
//         default: ""
//     },
//     followers:{
//         type: Array,
//         default:[]
//     },
//     isAdmin:{
//         type: Boolean,
//         default:false        
//     }, 
// },
// {timestamps: true}
// );

// export default mongoose.model("User", UserSchema);

// User model
import mongoose from "mongoose";

// Define user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc: {
        type: String,
        max: 100,
    },
     city: {
        type: String,
        max: 50,
    },
      from: {
        type: String,
        max: 50,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
        },
    },
    { timestamps: true }
);
  
        

// Create and export User model
export default mongoose.model("User", UserSchema);

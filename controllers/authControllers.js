// import Users from "../models/Users.js";
import User from "../models/Users.js";
import bcrypt from "bcrypt";

export const registerController = async (req, res) => {
try {
    const {username, email, password} = req.body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = await new User({
        username,
        email,
        password: hashedPassword,
    })

    // save user and respond
    await newUser.save();
    res.status(201).json({
      status: true,
      message: "User created successfully",
      data: newUser,
  });


} catch (error) {
  res.status(404)
  res.json({
    status: false,
    message: error.message,
  });
};    
};

// Authentication controller
// import User from "../models/Users.js";

// // Controller function for user registration
// export const registerController = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;

//         // Create a new user
//         const newUser = await User.create({
//             username,
//             email,
//             password,
//         });

//         res.status(201).json({
//             status: true,
//             message: "User created successfully",
//             data: newUser,
//         });
//     } catch (error) {
//         res.status(400).json({
//             status: false,
//             message: error.message,
//         });
//     }
// };

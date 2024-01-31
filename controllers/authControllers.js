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



export const loginController = async (req, res) => {
  try {
      const { email, password } = req.body;

      if (!email || !password) {
          return res.status(400).json({
              status: false,
              message: 'Email and password are required',
          });
      }

      const user = await User.findOne({ email });

      if (!user) {
          return res.status(404).json({
              status: false,
              message: 'Invalid email',
          });
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
          return res.status(400).json({
              status: false,
              message: 'Invalid password',
          });
      }

      res.status(200).json({
          status: true,
          message: 'Login successful',
          user: user, // Optionally, you can send the user details back to the client
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({
          status: false,
          message: 'Internal server error',
      });
  }
};
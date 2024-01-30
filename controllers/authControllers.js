import User from "../models/Users.js";


export const registerController = async (req, res) => {
try {
    const {username, email, password} = req.body;



    // create new user
    const users = await new User({
        username,
        email,
        password,
    })

    // save user and respond
    await users.save();
    res.json({
      status: true,
      message: "User created successfully",
      data: users,
    });


} catch (error) {
  res.status(404)
  res.json({
    status: false,
    message: error.message,
  });
};    
};
const User = require("../model/user");
const bcrypt = require("bcryptjs"); // This library/package will be used to encrypt the password
const jwt = require("jsonwebtoken"); // This Library will help us give and verify access tokens


const registerUser = async (request, response) => {
  const data = request.body;

  // We are hashing/encrypting password based the data.password string and the salt value 10 which is the utmost encryption
  const encryptPassword = await bcrypt.hash(data.password, 10);

  const newUser = new User({
    name: data.name,
    email: data.email,
    password: encryptPassword
  })

  try {
    const output = await newUser.save();
    return response.status(201).json({
      message: "Succesfully Registered User",
      data: output
    })
  } catch (error) {
    return response.status(500).json({
      message: "There was an error",
      error
    })
  }

}

const loginUser = async (request, response) => {
  const data = request.body;

  let foundUser = await User.findOne({ email: data.email });

  if (foundUser) {
    // Then we will check for password

    // This will be either true or false
    const matchPassword = await bcrypt.compare(data.password, foundUser.password);

    if (matchPassword) {

      // We are trying to create an access token based on which the user will be able to interact with the website
      const accessToken = jwt.sign(
        {
          email: foundUser.email,
          name: foundUser.name
        },
        process.env.SECRET_KEY
      )

      return response.status(200).json({
        message: "User Succesfully Logged In",
        accessToken,
        data: foundUser
      })
    } else {
      // User password is incorrect
      return response.status(401).json({
        message: "User Password is incorrect",
        data: null
      })
    }

  } else {

    // If user doesn't exist
    return response.status(404).json({
      message: "User does not exist, please register",
      data: null
    })
  }


}

const getAllUsers = async (request, response) => {
  console.log("I am called after the middleware in server.js");

  console.log(request.decodedEmail, request.decodedName);

  try {
    const data = await User.find();

    const filteredData = data.map((user) => {
      return {
        name: user.name,
        email: user.email,
        id: user._id,
        createdAt: user.createdAt
      }
    })

    return response.status(200).json({
      message: "Users found Succesfully",
      filteredData
    })
  } catch (error) {
    return response.status(500).json({
      message: "There was an error",
      error
    })
  }
}

const deleteUser = async (request, response) => {

  try {
    const id = request.params.id;
    await User.findByIdAndDelete(id);

    return response.status(200).json({
      message: "User Deleted Successfully",

    })

  } catch (error) {
    return response.status(500).json({
      message: "There was an error",
      error
    })
  }


}

const updateUser = async (request, response) => {
  const data = request.body;

  console.log(data);

  const userID = request.params.id;


  try {
    await User.findByIdAndUpdate(userID, {
      name: data.name,
      email: data.email,
    })

    return response.status(201).json({
      message: "User Updated Successfully"
    })
  } catch (error) {
    return response.status(500).json({
      message: "There was an error",
      error
    })
  }

}

const updatePassword = async (request, response) => {
  const data = request.body;

  const userData = localStorage.getItem("user");

  console.log(data);
  console.log(userData.password);
  console.log(await bcrypt.hash(data.currentPassword, 10));

  const userID = request.params.id;
  let encryptPassword = "";

  if (data.currentPassword !== data.newPassword && data.newPassword === data.confirmPassword) {
    encryptPassword = await bcrypt.hash(data.newPassword, 10);

    try {
      await User.findByIdAndUpdate(userID, {
        password: encryptPassword
      })


      return response.status(201).json({
        message: "Password Updated Successfully"
      })
    } catch (error) {
      return response.status(500).json({
        message: "There was an error",
        error
      })
    }
  }


}



module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
  updateUser,
  updatePassword
}
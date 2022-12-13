const express = require("express");
const router = express.Router();


// Here we are using destructuring
const { registerUser, loginUser, getAllUsers, deleteUser, updateUser, updatePassword } = require("../controller/user");
const validateToken = require("../middleware/validate");

// router.get("/", userController.getAllUsers)

router.get("/", validateToken, getAllUsers);

// Registering
router.post("/register", registerUser) //endpoint, function that has an API

// // Login
router.post("/login", loginUser) //endpoint, function that has an API

router.delete('/delete/:id', deleteUser)

router.put("/update/:id", updateUser)
router.put("/updatepassword/:id", updatePassword)


// router.get("/:id", userController.getUserById)

// router.put("/:id", userController.updateUser)

// router.delete(":/id", userController.deletUser);

module.exports = router;
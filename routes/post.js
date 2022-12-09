const express = require("express");
const router = express.Router();


// Here we are using destructuring
const { createPost, getAllPosts, deletePost } = require("../controller/post");
const { showExpenses } = require("../public/main/expense");
const validateToken = require("../middleware/validate")

// router.get("/", userController.getAllUsers)

router.get("/", getAllPosts); //API

router.post("/create", validateToken, createPost) //API

router.delete('/:id', deletePost)

router.get("/expenses", showExpenses)


// router.get("/:id", userController.getUserById)

// router.put("/:id", userController.updateUser)

// router.delete(":/id", userController.deletUser);

module.exports = router;
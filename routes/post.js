const express = require("express");
const router = express.Router();


// Here we are using destructuring
const { createPost, getAllPosts, deletePost } = require("../controller/post");
const validateToken = require("../middleware/validate")


router.get("/", getAllPosts); //API

router.post("/create", validateToken, createPost) //API

router.delete('/:id', deletePost)



module.exports = router;
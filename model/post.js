const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  typeOfExpense: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
}, {
  // This ensures that we have created at and updated at
  timestamps: true
})

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
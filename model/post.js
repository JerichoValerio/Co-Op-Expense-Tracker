const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  expenseOrIncome: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: [true, "Please enter a positive or negative number"]
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
let expenses = {};

// const getUser = JSON.parse(localStorage.getItem("user"));

// console.log(getUser);

const showExpenses = async (req, res) => {

  try {
    const data = await Post.find({
      user: req.user._id
    });

    return res.status(200).json({
      message: "Got all of the expenses!",
      data
    })
  } catch (error) {
    return res.status(500).json({
      message: "There was an error",
      error
    })
  }
}

module.exports = {
  showExpenses
}

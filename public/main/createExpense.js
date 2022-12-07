const newExpense = {};

const typeOfExpense = (event) => {
  newExpense.typeOfExpense = event.target.value;
}

const amount = (event) => {
  newExpense.amount = event.target.value;
}

const submitExpense = async (event) => {

  event.preventDefault();

  try {
    const res = await fetch(`/posts/create`)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  submitExpense
}
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
    const res = await fetch(`/posts/create`, {
      method: "post",
      body: JSON.stringify(newExpense),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('acess-token'))}`
      }
    })
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  typeOfExpense,
  amount,
  submitExpense
}
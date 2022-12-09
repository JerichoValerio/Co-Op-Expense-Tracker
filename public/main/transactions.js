const newTransaction = {};
let baseUrl = "/api/v1";

const transactionName = (event) => {
  newTransaction.expenseOrIncome = event.target.value;
}

const transactionAmount = (event) => {
  newTransaction.amount = event.target.value;
}

const submitTransaction = async (event) => {

  // We don't want to page to refresh because we are not using actions here!
  event.preventDefault();
  // We will call the API for our own backend Here!

  try {
    const response = await fetch(`${baseUrl}/posts/create`, {
      method: "post",
      body: JSON.stringify(newTransaction),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('acess-token'))}`
      },
    })

  } catch (error) {
    console.log(error);
  }
}


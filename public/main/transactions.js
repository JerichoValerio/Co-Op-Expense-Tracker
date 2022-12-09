const newTransaction = {};
let baseUrl = "/api/v1";

(function isAlreadyLoggedIN() {
  let accessToken = JSON.parse(localStorage.getItem("acess-token"));

  if (accessToken) {
    window.location.href = "home/home.html";
  }
})();

// IIFE --> Immediately Invoked Functions
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE#:~:text=An%20IIFE%20(Immediately%20Invoked%20Function,Ben%20Alman%20in%20his%20blog.

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
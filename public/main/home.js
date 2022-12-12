const logout = () => {
  // Ideally we should another API for loging the user out, so that we can destroy the access-token

  alert("Succesfully logged out!");
  localStorage.removeItem('acess-token');
  localStorage.removeItem('user');

  window.location.href = "../login.html";
}

const showListOfPosts = async () => {
  const response = await fetch(`${baseUrl}/posts`);
  const finalOutput = await response.json();

  const getPostView = document.querySelector("#postsview");

  getPostView.innerHTML = "";

  let tblBody = document.createElement("tbody");
  // creates a <tbody> element
  for (let i = finalOutput.data.length - 1; i >= 0; i--) {
    // creates a table row
    let row = document.createElement("tr");

    const userID = JSON.parse(localStorage.getItem("user"));

    if (finalOutput.data[i].user._id === userID._id) {
      for (let prop in finalOutput.data[i]) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        let cell = document.createElement("td");
        if (prop === "_id") {
          let button = document.createElement("button");
          button.classList.add(finalOutput.data[i][prop]);
          button.onclick = deleteTransaction;
          button.innerHTML = "X";
          cell.appendChild(button);
          row.appendChild(cell);
        }
        else if (prop === "expenseOrIncome" || prop === "amount") {
          let cellText = document.createTextNode(finalOutput.data[i][prop]);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
      }
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // add the table body to the table
  getPostView.appendChild(tblBody);


}


const showIncome = async () => {

  const getIncome = document.querySelector(".inc__container");

  let income = await getAmount("income");

  const incomeDisplay = document.createElement("p");
  incomeDisplay.classList.add("inc__money");
  if (getIncome.hasChildNodes()) {
    getIncome.removeChild(getIncome.lastElementChild);
  }
  const incomeText = document.createTextNode(income);
  incomeDisplay.appendChild(incomeText);


  getIncome.appendChild(incomeDisplay);

}

const showExpense = async () => {

  const getExpense = document.querySelector(".exp__container");

  let expense = await getAmount("expense");

  const expenseDisplay = document.createElement("p");
  expenseDisplay.classList.add("exp__money");
  if (getExpense.hasChildNodes()) {
    getExpense.removeChild(getExpense.lastElementChild);
  }
  const expenseText = document.createTextNode(expense);
  expenseDisplay.appendChild(expenseText);


  getExpense.appendChild(expenseDisplay);

}

const showBalance = async () => {

  const getBalance = document.querySelector(".balance__amount");

  let balance = await getAmount("income") + await getAmount("expense");

  const expenseDisplay = document.createElement("p");
  expenseDisplay.classList.add("balance__money");
  if (getBalance.hasChildNodes()) {
    getBalance.removeChild(getBalance.lastElementChild);
  }
  const expenseText = document.createTextNode(balance);
  expenseDisplay.appendChild(expenseText);


  getBalance.appendChild(expenseDisplay);
}

const getAmount = async (incomeOrExpense) => {
  const response = await fetch(`${baseUrl}/posts`);
  const finalOutput = await response.json();

  let amount = 0;

  for (let i = 0; i < finalOutput.data.length; i++) {
    const userID = JSON.parse(localStorage.getItem("user"));
    if (finalOutput.data[i].user._id === userID._id) {
      for (let value in finalOutput.data[i]) {
        if (value === "amount" && incomeOrExpense === "income") {
          if (finalOutput.data[i][value] > 0) {
            amount += finalOutput.data[i][value];
          }
        }
        else if (value === "amount" && incomeOrExpense === "expense") {
          if (finalOutput.data[i][value] < 0) {
            amount += finalOutput.data[i][value];
          }
        }
      }
    }
  }

  return amount;
}




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


  // for (let i = 0 ; i < finalOutput.data.length; i++) {

  //     const div = document.createElement("div");
  //     div.classList.add("card");

  //     const h3 = document.createElement("h3");
  //     h3.textContent = finalOutput.data[i].expenseOrIncome;

  //     div.appendChild(h3);

  //     const h4 = document.createElement("h4");
  //     h4.textContent = finalOutput.data[i].amount;

  //     div.appendChild(h4);

  //     getPostView.appendChild(div);

  // }

  let tblBody = document.createElement("tbody");
  // creates a <tbody> element
  for (let i = finalOutput.data.length - 1; i > 0; i--) {
    // creates a table row
    let row = document.createElement("tr");
    for (let prop in finalOutput.data[i]) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      let cell = document.createElement("td");
      if (prop === "expenseOrIncome" || prop === "amount") {
        let cellText = document.createTextNode(finalOutput.data[i][prop]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // add the table body to the table
  getPostView.appendChild(tblBody);


}

const showIncome = async () => {
  const response = await fetch(`${baseUrl}/posts`);
  const finalOutput = await response.json();

  const getIncome = document.querySelector(".inc");

  let income = 0;

  for (let i = 0; i < finalOutput.data.length; i++) {
    for (let value in finalOutput.data[i]) {
      if (value === "amount") {
        if (finalOutput.data[i][value] > 0) {
          income += finalOutput.data[i][value];
        }
      }
    }
  }

  const incomeDisplay = document.createElement("p");
  incomeDisplay.classList.add("inc__money");
  if (getIncome.hasChildNodes()) {
    getIncome.removeChild(getIncome.lastElementChild);
  }
  const incomeText = document.createTextNode(income);
  if(incomeDisplay.hasChild()){
    incomeDisplay.removeChild(incomeDisplay.childNodes[0]);
  }
  
  incomeDisplay.appendChild(incomeText);
  getIncome.appendChild(incomeDisplay);
 

}

const showExpense = async () => {
  const response = await fetch(`${baseUrl}/posts`);
  const finalOutput = await response.json();

  const getExpense = document.querySelector(".exp__container");

  let expense = 0;

  for (let i = 0; i < finalOutput.data.length; i++) {
    for (let value in finalOutput.data[i]) {
      if (value === "amount") {
        if (finalOutput.data[i][value] < 0) {
          expense += finalOutput.data[i][value];
        }
      }
    }
  }

  const expenseDisplay = document.createElement("p");
  expenseDisplay.classList.add("exp__money");
  if (getExpense.hasChildNodes()) {
    getExpense.removeChild(getExpense.lastElementChild);
  }
  const expenseText = document.createTextNode(expense);
  expenseDisplay.appendChild(expenseText);


  getExpense.appendChild(expenseDisplay);

}




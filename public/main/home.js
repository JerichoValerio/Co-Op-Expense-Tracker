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

  var tblBody = document.createElement("tbody");
  // creates a <tbody> element
  for (var i = 0; i < finalOutput.data.length; i++) {
    // creates a table row
    var row = document.createElement("tr");
    for (var prop in finalOutput.data[i]) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      if (prop === "expenseOrIncome" || prop === "amount") {
        var cellText = document.createTextNode(finalOutput.data[i][prop]);
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




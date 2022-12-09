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

    window.location.href = "home.html";

  } catch (error) {
    console.log(error);
  }
}

const showListOfPosts  = async () => {
  const response = await fetch(`${baseUrl}/posts`);
  const finalOutput = await response.json();

  const getPostView = document.querySelector("#postsview");

  for (let i = 0 ; i < finalOutput.data.length; i++) {

      const div = document.createElement("div");
      div.classList.add("card");

      const h3 = document.createElement("h3");
      h3.textContent = finalOutput.data[i].title;

      div.appendChild(h3);

      const h4 = document.createElement("h4");
      h4.textContent = finalOutput.data[i].subTitle;

      div.appendChild(h4);

      const p = document.createElement("p");
      p.textContent = finalOutput.data[i].description;

      div.appendChild(p);

      console.log(div);

      getPostView.appendChild(div);

  }


}


showListOfPosts();
const showUserInfo = () => {
  const userNameTitle = document.querySelector("#username");

  const getUser = JSON.parse(localStorage.getItem("user"));

  userNameTitle.innerHTML = `Hello, ${getUser.name}`;

  const userName = document.querySelector("#name");

  userName.innerHTML = getUser.name;

  const userEmail = document.querySelector("#email");
  const getEmail = JSON.parse(localStorage.getItem("user"));

  userEmail.innerHTML = getEmail.email;

}

showUserInfo();

const updateName = (event) => {
  user.name = event.target.value;
}

const updateEmail = (event) => {
  user.email = event.target.value;
}

const updatePassword = (event) => {
  user.password = event.target.value;
}

const submitUserForm = async (event) => {

  // We don't want to page to refresh because we are not using actions here!
  event.preventDefault();
  console.log(user);
  // We will call the API for our own backend Here!

  try {
    const response = await fetch(`${baseUrl}/users/update`, {
      method: "put",
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    // We have to fix this 
    if (response) {
      window.location.href = "login.html";
    }
  } catch (error) {
    console.log(error);
  }

}



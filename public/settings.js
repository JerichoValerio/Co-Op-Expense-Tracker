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



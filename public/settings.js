
const userNameTitle = document.querySelector("#username");

const getUser = JSON.parse(localStorage.getItem("user"));

userNameTitle.innerHTML = getUser.name;



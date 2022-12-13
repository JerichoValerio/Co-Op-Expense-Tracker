const showUserInfo = () => {
  const userNameTitle = document.querySelector("#username");

  const getUser = JSON.parse(localStorage.getItem("user"));

  userNameTitle.innerHTML = `Hello, ${getUser.name}`;

  // const userName = document.querySelector("#name");

  // userName.innerHTML = getUser.name;

  // const userEmail = document.querySelector("#email");
  // const getEmail = JSON.parse(localStorage.getItem("user"));

  // userEmail.innerHTML = getEmail.email;

}
showUserInfo();

let updateUser = {};
let baseUrl = "/api/v1";
let updatePass = {};


const updateName = (event) => {
  updateUser.name = event.target.value;
}

const updateEmail = (event) => {
  updateUser.email = event.target.value;
}

const currentPassword = (event) => {
  updatePass.currentPassword = event.target.value;
}

const newPassword = (event) => {
  updatePass.newPassword = event.target.value;
}

const confirmPassword = (event) => {
  updatePass.confirmPassword = event.target.value;
}
const submitUserUpdate = async (event) => {

  // We don't want to page to refresh because we are not using actions here!
  event.preventDefault();
  // We will call the API for our own backend Here!

  try {
    const response = await fetch(`${baseUrl}/users/update`, {
      method: "put",
      body: JSON.stringify(updateUser),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    
  } catch (error) {
    console.log(error);
  }

}

const submitPasswordUpdate = async (event) => {

  // We don't want to page to refresh because we are not using actions here!
  event.preventDefault();
  // We will call the API for our own backend Here!

  try {
    const response = await fetch(`${baseUrl}/users/updatepassword`, {
      method: "put",
      body: JSON.stringify(updatePass),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    
  } catch (error) {
    console.log(error);
  }

}


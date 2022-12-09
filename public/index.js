
let user = {};
let baseUrl = "/api/v1";

(function isAlreadyLoggedIN() {
    let accessToken = JSON.parse(localStorage.getItem("acess-token"));

    if (accessToken) {
        window.location.href = "/main/home.html";
    }
})();

const setName = (event) => {
    user.name = event.target.value;
}

const setEmail = (event) => {
    user.email = event.target.value;
}

const setPassword = (event) => {
    user.password = event.target.value;
}

const submitUserForm = async (event) => {

    // We don't want to page to refresh because we are not using actions here!
    event.preventDefault();
    console.log(user);
    // We will call the API for our own backend Here!

    try {
        const response = await fetch(`${baseUrl}/users/register`, {
            method: "post",
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
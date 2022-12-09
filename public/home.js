const logout = () => {
  // Ideally we should another API for loging the user out, so that we can destroy the access-token

  alert("Succesfully logged out!");
  localStorage.removeItem('acess-token');
  localStorage.removeItem('user');

  window.location.href = "../login.html";
}
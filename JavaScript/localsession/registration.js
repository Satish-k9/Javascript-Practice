

function registerUser() {
    var userName = document.getElementById("email").value;
    var Password = document.getElementById("pwd").value;
   

    localStorage.setItem("email", userName);
    localStorage.setItem("password", Password);
}
function loginUser() {
    var userName = document.getElementById("email").value;
    var Password = document.getElementById("pwd").value;

    var userEmail = localStorage.getItem("email");
   var userPass= localStorage.getItem("pwd");

    if(userName == userEmail) {
        if(Password == userPass) {
            alert("Login Successful")
        }
    } else {
        alert("Invalid Credentials");

     }
}
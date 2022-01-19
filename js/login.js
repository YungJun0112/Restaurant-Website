function account_validation() {
    var username = document.loginForm.uname.value;
    var ps = document.loginForm.psw.value;
    if ((username == "user01" && ps == "123456") || (username == "user02" && ps == "123456") ) {
        alert("Login Successfully!");
        return true;
    } else {
        alert("Invalid username or password. Please try again.");
        document.getElementById('uname').style.border = "1px solid red";
        document.getElementById('psw').style.border = "1px solid red";
        document.getElementById('uname').addEventListener("click", function () {
            document.getElementById('uname').style.border = "1px solid lightgrey";
        })
        document.getElementById('psw').addEventListener("click", function () {
            document.getElementById('psw').style.border = "1px solid lightgrey";
        })
        return false;
        //document.loginForm.getElementsByName('uname').style.border = "solid 1 px red";
        
    }
}
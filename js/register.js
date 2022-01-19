function registration() {
    var username = document.registerForm.username.value;

    var emailInput = document.registerForm.email.value;
    var emailRegistered1 = "user01@gmail.com";
    var emailRegistered2 = "user02@gmail.com";

    var x = document.registerForm.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");

    var ps = document.registerForm.psw.value;
    var confirmps = document.registerForm.psw_repeat.value;

    if (username == "user01" || username == "user02") {
        alert("Sorry. This username already taken. Please try again.");
        document.getElementById('regName').style.border = "1px solid red";
        document.getElementById('regName').addEventListener("click", function () {
            document.getElementById('regName').style.border = "1px solid lightgrey";
        })
        return false;
    } if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address.");
        document.getElementById('regEmail').style.border = "1px solid red";
        document.getElementById('regEmail').addEventListener("click", function () {
            document.getElementById('regEmail').style.border = "1px solid lightgrey";
        })
        return false;
    } if (emailInput == emailRegistered1 || emailInput == emailRegistered2) {
        alert("This e-mail address had been registered.");
        document.getElementById('regEmail').style.border = "1px solid red";
        document.getElementById('regEmail').addEventListener("click", function () {
            document.getElementById('regEmail').style.border = "1px solid lightgrey";
        })
        return false;
    } if ((ps.length < 6) || (ps != confirmps)) {
        alert("Please enter at least 6-digits or letters password and same in the confirm password box.");
        document.getElementById('regPsw').style.border = "1px solid red";
        document.getElementById('regPsw').addEventListener("click", function () {
            document.getElementById('regPsw').style.border = "1px solid lightgrey";
        })
        document.getElementById('regPswRepeat').style.border = "1px solid red";
        document.getElementById('regPswRepeat').addEventListener("click", function () {
            document.getElementById('regPswRepeat').style.border = "1px solid lightgrey";
        })
        return false;
    } else {
        alert("Registration succeed! Welcome to Dragon Nest!")
        return true;
    }
}


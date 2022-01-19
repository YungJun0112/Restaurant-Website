function footer_email_validation() {
    var x = document.subForm.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address.");
        return false;
    } else {
        alert("Congratulation! You have subscribed to us.");
        return true;
    }
}
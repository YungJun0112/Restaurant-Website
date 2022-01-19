function payment_validation(evt){
    var cardname = document.paymentForm.cardName.value;
    var cardno = document.paymentForm.cardNo.value;
    var cvv = document.paymentForm.cvv.value;
    var name = document.paymentForm.name.value;
    var phoneNo = document.paymentForm.phoneNo.value;
    var unitNo = document.paymentForm.unitNo.value;
    var address = document.paymentForm.address.value;
    var postcode = document.paymentForm.postcode.value;
    var city = document.paymentForm.city.value;

    if (cardno.length < 16) {
        alert("Invalid Card Number.")
        return false;
    } if (cvv.length < 3) {
        alert("Invalid CVV code.")
        return false;
    } if (phoneNo.length < 11) {
        alert("Invalid Phone Number.")
        return false;
    } if (postcode.length < 5) {
        alert("Invalid PostCode.")
        return false;
    } else {
        alert("Your order is now processing... Thank you.")
        return true;
    }
}
function inputDigitsOnly(input) {
    var digits = /[^0-9]/g;
    //allow number from 0 to 9 only
    input.value = input.value.replace(digits, "");
}
function inputLettersOnly(input) {
    var char_spcae = /[^a-z\s]/gi;
    //allow character a to z and space (\s)
    // g = global
    // i = allow upper and lowercase
    input.value = input.value.replace(char_spcae, "");
}

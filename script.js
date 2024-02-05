function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputText.value) {
        document.getElementById("here").innerHTML = "";
        document.getElementById("here2").innerHTML = "Please enter Email Address";
        return false;
    }
    if (inputText.value.match(mailformat)) {
        document.getElementById("here").innerHTML = "Valid Email Address";
        document.getElementById("here2").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("here2").innerHTML = "You Have entered an invalid email address!";
        // document.getElementById("here2").innerHTML = "";
    }
}
function passwordvalid() {
    var pw = document.getElementById("pswd").value;
    if (pw == "") {
        document.getElementById("message").innerHTML = "Please Enter Password";
        return false;
    }
    else if (pw.length < 8) {
        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }
    else if (pw.length >= 8) {
        document.getElementById("message2").innerHTML = "Valid";
        alert("welcome!!");

    }

    // else {  
    //     alert("welcome!!");

    // }
}
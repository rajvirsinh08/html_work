function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputText.value) {
        document.getElementById("successemail").innerHTML = "";
        document.getElementById("erroremail").innerHTML = "Please enter Email Address";
        return false;
    }
    if (inputText.value.match(mailformat)) {
        document.getElementById("successemail").innerHTML = "Valid Email Address";
        document.getElementById("erroremail").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("erroremail").innerHTML = "You Have entered an invalid email address!";
        // document.getElementById("here2").innerHTML = "";
    }
}
function passwordvalid() {
    var pw = document.getElementById("pswd").value;
    if (pw == "") {
        document.getElementById("errorpswd").innerHTML = "Please Enter Password";
        return false;
    }
    else if (pw.length < 8) {
        document.getElementById("errorpswd").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }
    else if (pw.length >= 8) {
        document.getElementById("successpswd").innerHTML = "Valid";
        alert("welcome!!");

    }

    // else {  
    //     alert("welcome!!");

    // }
}
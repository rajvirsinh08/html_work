function passwordvalid(inputText) {
    var pw = document.getElementById("pswd").value;
    var pw2 = document.getElementById("pswd2").value;

    if (pw == "") {
        document.getElementById("errorpswd").innerHTML = "Please Enter Password";
        return false;
    }
    else if (pw.length < 8) {
        document.getElementById("errorpswd").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }
    else if (pw != pw2) {
        document.getElementById("errorpswdconfirm").innerHTML = "Password Doesn't Match!!";
        return false;
    }
    else if (pw.length >= 8) {
        document.getElementById("errorpswd").innerHTML = "";

        alert("welcome");
    }

    // else {
    //     alert("Your password reset!!");

    // }
}
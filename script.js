function val() {
    var user = "shreya"
    var pass = "1234";
    var u = document.frm1.tx.value;
    var p = document.frm1.pwd.value;
    var f = 0;
    if (u == "" && p == "") {
        alert("fill the details");
        f = 1;
    }
    if (user != u && f == 0) {
        alert("please check your user-id");
    }
    if (p != pass && f == 0) {
        alert("please check your password");
    }

    if (user == u && pass == p) {
        alert("successfull"); //redirect to dashboard page.
        window.location.href = "dashboard.html";
    }
}
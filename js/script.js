$(document).ready(function () {
    $("#btn").click(function () {
        if($("#logemail").val()=="")
        alert("Please enter Username");
        else if($("#password").val()=="")
        alert("Please enter password");
        else window.location.href = "homePage/home.html";
    });
});


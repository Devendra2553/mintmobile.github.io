$(document).ready(function () {

    $("#btn-to-signup, .recent").click(function () {
        $(".login").css("margin-top", "-515px");
    });
    $("#btn-to-login, .home, .back").click(function () {
        $(".login").css("margin-top", "0px");
    });

    $("#login-form").submit(function () {

        var Lemail = $("#Lemail").val();
        var Lpassword = $("#Lpassword").val();
        
        if (Lemail === "" || Lpassword === "") {

            $("#label-login").css("background-color", "maroon");
            $("#label-login").text("Check Again");

            $("#label_e").css("color", "maroon");
            $("#Lemail").css("border-color", "maroon");

            $("#label_p").css("color", "maroon");
            $("#Lpassword").css("border-color", "maroon");

            $("#btn-login").css("background-color", "white").css("color", "maroon").css("border", "1px solid maroon");
            $("#btn-to-signup").css("background-color", "maroon").css("color", "white").css("border", "1px solid maroon");

            return false;
        }
        else {
            $("#label-login").css("background-color", "#4b5c78");
            $("#label-login").text("Thank You");

            $("#label_e").css("color", "#4b5c78");
            $("#email").css("border-color", "#4b5c78");

            $("#label_p").css("color", "#4b5c78");
            $("#password").css("border-color", "#4b5c78");

            $("#btn-login").css("background-color", "#4b5c78").css("color", "white").css("border", "1px solid #4b5c78");
            $("#btn-to-signup").css("background-color", "white").css("color", "#4b5c78").css("border", "1px solid #4b5c78");
        }
    });

    $("#signup-form").submit(function () {

        var name = $("#name").val();
        var email =$("#email").val();
        var mobile = $("#mobile").val();
        var add = $("#address").val()
        var pass = $("#password").val();
        var cnf = $("#cnfpassword").val();

        if (name === "" || email === "" || mobile === "" || add === "" ||pass === "" || cnf === "") {
            $("#label-signup").css("background-color", "maroon");
            $("#label-signup").text("Fill all the fields");
            $("#btn-signup").css("background-color", "maroon").css("color", "white").css("border", "1px solid maroon");
            return false;
        }
        else {
            $("#btn-signup").css("background-color", "white").css("color", "#4b5c78").css("border", "1px solid #4b5c78");
            $("#btn-to-login").css("background-color", "#4b5c78").css("color", "white").css("border", "1px solid #4b5c78");
            $("#label-signup").css("background-color", "#4b5c78");
            $("#label-signup").text("Thank You");
        }
    });

});
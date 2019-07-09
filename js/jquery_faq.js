"use strict";

//ALERT
function alertMessage() {
    var message = "Would you like to sign up for our newsletter?";
    alert(message);
}
alertMessage();

//CODE FOR CLICKS
$(document).ready(function () {
    $("#reveal").click(function () {
        $('dd').toggleClass('invisible');
    });
    $("h3").click(function () {
        $(this).next().slideToggle();
        // $("li").css({"font-weight": "bold"});
        // $("ul").show();
    });

    $("#list-btn").click(function () {
        $("li:last-child").css({"background-color": "#ffea4a",
            "border-radius": "5px"
        });
        $("li:first-child").css({"background-color" : "dodgerblue",
            "border-radius": "5px"})
    });

    $("#hide").click(function() {
        $(".newsletter").hide();
    });

    $(".fade-in").delay(8000).fadeIn(2000);

});




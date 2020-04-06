$(document).ready(function() {
    $("form#formOne").submit(function(event) {
        event.preventDefault();
        var question1Input = parseInt($("#question1").val());
        var question2Input = parseInt($("#question2").val());
        var question3Input = parseInt($("#question3").val());
        var question4Input = parseInt($("#question4").val());
        var question5Input = parseInt($("#question5").val());

        var score = question1Input + question2Input + question3Input + question4Input + question5Input;

        if (score < 1) {
            $("#low").show();
            $("middle").hide();
            $("high").hide();
        } else if (score > 1 && 5 < score) {
            $("#low").hide();
            $("middle").show();
            $("high").hide();
        } else if (score > 5) {
            $("#low").hide();
            $("middle").hide();
            $("high").show();
        };
    });
    $(".reset-btn").click(function(
        $("#formOne").trigger("reset");
});

// $(document).ready(function(){
//     $(".reset-btn").click(function(
//         $("#formOne").trigger("reset");
//     ))
// })
$(document).submit(function() {
    $("form#formOne").submit(function(event) {
        event.preventDefault();
        var question1Input = parseInt($("#question1").val());
        var question2Input = parseInt($("#question2").val());
        var question3Input = parseInt($("#question3").val());
        var question4Input = parseInt($("#question4").val());
        var question5Input = parseInt($("#question5").val());

        var score = question1 + question2 + question3 + question4 + question5;


    })
})
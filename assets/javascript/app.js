



//initialView();
answerView();

function initialView(){
    $("#gameContainer").empty();
    var a = $("<button>");
    a.addClass("startButton");
    a.text("start");
    $("#gameContainer").append(a);
}

function questionsView(){
    $("#gameContainer").empty();
    $("#gameContainer").append("<p id='timeRemaining'>Time Remaining:"+"</p>");
    $("#gameContainer").append("<p id='question'>"+"Insert question"+"</p>");
    var div = $("<div>");
    div.addClass("buttonsContainer");
    $("#gameContainer").append(div);
    for(var i = 0; i<4; i++){
        var a = $("<button>");
        a.addClass("button");
        a.text(i+1);
        $(".buttonsContainer").append(a);
    }
}

function answerView(){
    $("#gameContainer").empty();
    $("#gameContainer").append("<p id='timeRemaining'>Time Remaining:"+"</p>");
    $("#gameContainer").append("<p id='validation'>"+"Insert question"+"</p>");
    $("#gameContainer").append("<p id='correctAnswer'>"+"Insert question"+"</p>");
    $("#gameContainer").append("<img src='"+"https://via.placeholder.com/150"+"'>");
}

$(".startButton").on("click",function(){
    questionsView();
});

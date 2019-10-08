//The Empire,ET,Sean,You in your small corner, the big bang

var questions=[
    {   question:"Which 80s movie was the highest grossing film of the decade?",
        ans1:"Ghostbusters",
        ans2:"Back to the future",
        ans3:"E.T. The Extraterrestrial",
        ans4:"The Goonies",
        image:"Gremlins"
    },
    {   question:"Who was the first actor to portray James Bond on screen?",
        ans1:"Barry Nelson",
        ans2:"David Niven",
        ans3:"Pierce Brosnan",
        ans4:"Sean Connery",
        image:"Timothy Dalton"
    },
    {   question:"What TV program aired the first interracial kiss?",
        ans1:"You in Your Small Corner",
        ans2:"Rags",
        ans3:"Black. White.",
        ans4:"Star Trek",
        image:"The Twilight Zone"
    },
    {   question:"Howard Wolowitz is a character from which popular U.S. TV show?",
        ans1:"Two and a half men",
        ans2:"How I met your mother",
        ans3:"Friends",
        ans4:"Seinfeld",
        image:"The Big Bang Theory"
    },
    {   question:"Which Stars Wars movie does the line “Luke, I am your father” come from?",
        ans1:"The Empire Strikes Back",
        ans2:"The Phantom Menace",
        ans3:"The Last Jedi",
        ans4:"Return of the Jedi",
        image:"A New Hope"
    },
]


initialView();

function initialView(){
    $("#gameContainer").empty();
    var a = $("<button>");
    a.addClass("startButton");
    a.text("start");
    $("#gameContainer").append(a);

    $(".startButton").on("click",function(){
        questionsView();
    });
}

function questionsView(){
    $("#gameContainer").empty();
    $("#gameContainer").append("<p id='timeRemaining'>Time Remaining:"+"</p>");
    $("#gameContainer").append("<p id='question'>"+questions[0].question+"</p>");
    var div = $("<div>");
    div.addClass("buttonsContainer");
    $("#gameContainer").append(div);
    $(".buttonsContainer").append("<button class='button'>"+questions[0].ans1+"</button>");
    $(".buttonsContainer").append("<button class='button'>"+questions[0].ans2+"</button>");
    $(".buttonsContainer").append("<button class='button'>"+questions[0].ans3+"</button>");
    $(".buttonsContainer").append("<button class='button'>"+questions[0].ans4+"</button>");

    $(".button").on("click",function(){
        answerView(false);
    });
}

function answerView(correct){
    $("#gameContainer").empty();
    $("#gameContainer").append("<p id='timeRemaining'>Time Remaining:"+"</p>");
    $("#gameContainer").append("<p id='validation'>"+"Insert question"+"</p>");
    if(!correct){
        $("#gameContainer").append("<p id='correctAnswer'>"+"Insert question"+"</p>");
    }
    $("#gameContainer").append("<img id='answerImage' src='"+"https://via.placeholder.com/150"+"'>");
}

function resultsView(){
    $("#gameContainer").empty();
    $("#gameContainer").append("<p class='comments'>All done, here is how you did!</p>");
    $("#gameContainer").append("<p id='correctAnswers'>"+"Insert question"+"</p>");
    $("#gameContainer").append("<p id='incorrectAnswers'>"+"Insert question"+"</p>");
    $("#gameContainer").append("<p id='unansweredQuestions'>"+"Insert question"+"</p>");
}


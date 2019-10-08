//The Empire,ET,Sean,You in your small corner, the big bang

var glogalSelector = 0;

var questions=[
    {   question:"Which 80s movie was the highest grossing film of the decade?",
        ans1:{value:"Ghostbusters",select:false},
        ans2:{value:"Back to the future",select:false},
        ans3:{value:"E.T. The Extraterrestrial",select:true},
        ans4:{value:"The Goonies",select:false},
        image:"http://blog.memurise.com/wp-content/uploads/2019/04/ET_3.jpg"
    },
    {   question:"Who was the first actor to portray James Bond on screen?",
        ans1:{value:"Barry Nelson",select:false},
        ans2:{value:"David Niven",select:false},
        ans3:{value:"Pierce Brosnan",select:false},
        ans4:{value:"Sean Connery",select:true},
        image:"https://img.cinemablend.com/filter:scale/quill/0/4/5/7/d/4/0457d4e6efcb34bfab026e6c61b3bec7315364fa.jpg?mw=600"
    },
    {   question:"What TV program aired the first interracial kiss?",
        ans1:{value:"You in Your Small Corner",select:true},
        ans2:{value:"The Twilight Zone",select:false},
        ans3:{value:"Black. White.",select:false},
        ans4:{value:"Star Trek",select:false},
        image:"https://player.bfi.org.uk/sites/default/files/styles/landscape_480x270/public/hero-images/9dfd4bbdfde2994cc80eee8b88c2b351.jpg?itok=5DEuV_8G"
    },
    {   question:"Howard Wolowitz is a character from which popular U.S. TV show?",
        ans1:{value:"Two and a half men",select:false},
        ans2:{value:"How I met your mother",select:false},
        ans3:{value:"The Big Bang Theory",select:true},
        ans4:{value:"Seinfeld",select:false},
        image:"https://televisa.brightspotcdn.com/dims4/default/cc1b272/2147483647/strip/true/crop/896x504+56+0/resize/820x461!/quality/90/?url=http%3A%2F%2Fi2.esmas.com%2F2016%2F01%2F25%2F836158%2Fthe-big-bang-theory.jpg"
    },
    {   question:"Which Stars Wars movie does the line “Luke, I am your father” come from?",
        ans1:{value:"The Empire Strikes Back",select:true},
        ans2:{value:"The Phantom Menace",select:false},
        ans3:{value:"The Last Jedi",select:false},
        ans4:{value:"Return of the Jedi",select:false},
        image:"https://www.vintagemovieposters.co.uk/wp-content/uploads/2015/07/esbquadwhitelarge1-482x359.jpg"
    },
]

var correctAns = ["E.T. The Extraterrestrial","Sean Connery","You in Your Small Corner","The Big Bang Theory","The Empire Strikes Back"]


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
    $("#gameContainer").append("<p id='question'>"+questions[glogalSelector].question+"</p>");
    var div = $("<div>");
    div.addClass("buttonsContainer");
    $("#gameContainer").append(div);
    $(".buttonsContainer").append("<button class='button' value="+questions[glogalSelector].ans1.select+">"+questions[glogalSelector].ans1.value+"</button>");
    $(".buttonsContainer").append("<button class='button' value="+questions[glogalSelector].ans2.select+">"+questions[glogalSelector].ans2.value+"</button>");
    $(".buttonsContainer").append("<button class='button' value="+questions[glogalSelector].ans3.select+">"+questions[glogalSelector].ans3.value+"</button>");
    $(".buttonsContainer").append("<button class='button' value="+questions[glogalSelector].ans4.select+">"+questions[glogalSelector].ans4.value+"</button>");

    $(".button").on("click",function(){
        if($(this).val()==="true"){
            answerView(true,"That's correct! 😃","",questions[glogalSelector].image);
        }else{
            answerView(false,"Tha's not correct... ☹️","The correct answer is: "+correctAns[glogalSelector],questions[glogalSelector].image);
        }
        
    });
}

function answerView(correct,data,correctAns,image){
    $("#gameContainer").empty();
    $("#gameContainer").append("<p id='timeRemaining'>Time Remaining:"+"</p>");
    $("#gameContainer").append("<p id='validation'>"+data+"</p>");
    if(!correct){
        $("#gameContainer").append("<p id='correctAnswer'>"+correctAns+"</p>");
    }
    $("#gameContainer").append("<img id='answerImage' src='"+image+"'>");
}

function resultsView(){
    $("#gameContainer").empty();
    $("#gameContainer").append("<p class='comments'>All done, here is how you did!</p>");
    $("#gameContainer").append("<p id='correctAnswers'>"+"Insert question"+"</p>");
    $("#gameContainer").append("<p id='incorrectAnswers'>"+"Insert question"+"</p>");
    $("#gameContainer").append("<p id='unansweredQuestions'>"+"Insert question"+"</p>");
}


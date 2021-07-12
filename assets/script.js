var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript",
        choices: ["<HTML>", "<main>", "<javascript>", "<script>"],
        correct: "<script>",
        checked:false
    },
    {
        title: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "HyperLinks and Text Markup Language", "Home Tool Markup Langauge", "I dont know"],
        correct: "Hyper Text Markup Language",
        checked:false
    },
    {
        title: "What is an Array?",
        choices: ["A single variable that lets you store multipel elements", "primitive data type", "a conditional statement", "all of the above"],
        correct: "A single variable that lets you store multipel elements",
        checked:false
    },
    {
        title: "What is javascript",
        choices: ["a prototype-based langauge", "a lanague having object oriented features", "both above", "none of the above"],
        correct: "both above",
        checked:false
    },
    {
        title: "What is github?",
        choices: ["the same as git", "the terminal / bash", "not important", "a collaboration site for programmers"],
        correct: "a collaboration site for programmers",
        checked:false
    },
  
  ];


var btnWrapper = document.querySelector("#btnWrapper");
var header1 = document.querySelector("#header1");
var header2 = document.querySelector("#header2");
var scoreCard = document.querySelector("#scoreCard");
var formEle = document.querySelector("#form");
var initials = document.querySelector("#initials");
var submitInitialsBtn = document.querySelector("#submitInitialsBtn");
var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");
var title = document.querySelector("#title");
var dynRendering = document.querySelector("#dynRendering");
var questionTitle = document.querySelector("#questionTitle");
var clock = document.querySelector("#clock");
var startBtn = document.querySelector("#startBtn");

var submitBtn = document.querySelector("#submitBtn");
var questionsCard = document.querySelector("#questionsCard");
var footer = document.querySelector("#footer");
var dynRender = document.querySelector("#dynamicRendering");
var intro = document.querySelector("#intro");
var inProgress = document.querySelector("#inProgress");
var end = document.querySelector("#end");
var scoreTotal = document.querySelector("#scoreTotal");

var question1Ele = document.querySelector("#question1");
var question2Ele = document.querySelector("#question2");
var question3Ele = document.querySelector("#question3");
var question4Ele = document.querySelector("#question4");
var currentScore = 0;
var questionsIndex = 0;

var countDown = 45;
var ulCreated = document.createElement("ul");
// Start the timer
function timer() {
    var none = 0;
    var firstQuestion = questionsIndex;

    renderQuestions(firstQuestion); 
    timeInterval = setInterval(function () {
        countDown--;
      clock.textContent = "Clock: " + countDown;
      if (countDown <= none) {
          //when time runs out kill the timer. 
        clearInterval(timeInterval);
        terminate();
      }
    }, 1000);

  }

/**
 * This function renders the questions from the array
 * @param {acts as the index of the quetions array} questionIndex 
 */
function renderQuestions(questionIndex) {

    questionsCard.innerHTML = "";
    var answersArrayLength = questions[questionIndex].choices.length;
    var title = document.createElement("h1");
    title.textContent = questions[questionIndex].title;
    questionsCard.appendChild(title);

    for (var i = 0; i < answersArrayLength; i++) {
        var answer = document.createElement("h2");
        answer.textContent = questions[questionIndex].choices[i];
        answer.setAttribute("class","");
        questionsCard.appendChild(answer);
    }

}
/**
 * this function checks if the answer is correct
 * @param {answers user is selecting} event 
 */
function check (event) { 

    if (questions[questionsIndex].correct === event) {
        response1.textContent = "Good Job!!";
        return true;
    } else {

        countDown -= 5;
        response1.textContent = "Incorrect";
        return false;
    }

}


startBtn.addEventListener("click", function (event) {
    //starts timer
    timer();
    renderState("-intro"); //intro is hidden
    renderState("inProgress");//inprogress section is dispalyed
    renderState("-end");//end section is hidden
});

function terminate () {
    countDown = 0;
    renderState("-intro");
    renderState("-inProgress");
    renderState("end"); //end section displayed only
    
    
    scoreTotal.innerHTML = "Your Score: " + currentScore + " out of " + questions.length;
    
    
}



/**
 * 
 * @param {a reference to an element on index.html that needs to be either hidden or displayed} element 
 */
function switchState(element) {

    if (element.classList.contains("hide")) {
        element.classList.remove("hide");
    } else {
        element.classList.add("hide");
    }
    
    
}
/**
 * 
 * @param {a reference to an element on index.html that needs to be checked if hidden or not} element 
 */
function isHidden(element) {
    if (element.classList.contains("hide")) {
        return true;
    } else {
        return false;
    }
}

/**
 * Render state renders the stage that the user is in
 * @param {section elements on index.html that represent the state} element 
 */
function renderState(element) {
    switch (element) {
        case "intro":
            if (isHidden(intro)) {
                switchState(intro);
            } 
        break;
        case "inProgress":
            if (isHidden(inProgress)) {
                switchState(inProgress);
            }
        break;
        case "end":
            //console.log("xxxxx");
            //console.log("xxxxx");
            console.log(isHidden(end));
            
            if (isHidden(end)) {
                switchState(end);
            } 
        break;
            //negative statements
        case "-intro":
            if (!isHidden(intro)) {
                switchState(intro);
            } 
         
        break;
        
        case "-inProgress":
            if (!isHidden(inProgress)) {
                switchState(inProgress);
            } 
        break;
        case "-end":
            if (!isHidden(end)) {
                switchState(end);
            } 
        break;
    }
}

submitInitialsBtn.addEventListener("click", function (event) {
    //user must enter an initial
   
    if (initials.value === null || initials.value === "" || initials === undefined) {
        alert("you must enter a valid initial");
        return;
    }
    //object to be stringified and stored
    var playerObjFinalResults = {
        initials: initials.value,
        score: currentScore,
    };
    
    var scoreBoard = localStorage.getItem("scoreBoard");
    if (!scoreBoard) {
        console.log("line 247 scoreBoard returned not true");
        scoreBoard = []; //if no localstorage create an array
           
    } else {
        scoreBoard = JSON.parse(scoreBoard); 
    }

    scoreBoard.push(playerObjFinalResults);

    /*if there are more than players the last player will be removed from the list */
    if (scoreBoard > 10) {
        scoreBoard.pop();
    }
    var updatedScore = JSON.stringify(scoreBoard);
    localStorage.setItem("scoreBoard", updatedScore);
      
    



    switchState(formEle); //removes the form from the final screen
    
    switchState(scoreCard); //displays the scorecard
    readScores(scoreBoard) //displays the localstorage on the page

});


clearBtn.addEventListener("click", function () {
    localStorage.clear();
     scoreCard.innerHTML = "";
});

/**
 * 
 * @param {the parsed scoreBoard object} scoreBoard 
 */
function readScores(scoreBoard) {
    switchState(btnWrapper);
    console.log("scoreboard as str: "+scoreBoard);
    if (scoreBoard === null) {
        console.log("line 283 scoreBoard returned null");
        return;
    }

    //dynamically render the scoreboard elements 
    var li;
    var ol = document.createElement("ol");
    for (var i = 0; i < scoreBoard.length; i++) {

        li = document.createElement("li");
        li.textContent = scoreBoard[i].initials + " : " + scoreBoard[i].score;
        ol.appendChild(li);
        console.log("li==>"+li.textContent);

    }

    scoreCard.appendChild(ol);
    
    console.log("ol: "+ol);

}

backBtn.addEventListener("click", function () {
    location.reload();
});

questionsCard.addEventListener("click", function (event) {
    var event = event.target;
    event = event.textContent.trim();
    

    if (check(event)) {
        currentScore++;
    }
    if (questionsIndex === questions.length - 1) {
        terminate();
    } else {
        questionsIndex++;
        renderQuestions(questionsIndex);
    }
  });

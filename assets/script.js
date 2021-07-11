var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript",
        choices: ["<HTML>", "<main>", "<javascript>", "<script>"],
        answer: "<script>",
        checked:false
    },
    {
        title: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "HyperLinks and Text Markup Language", "Home Tool Markup Langauge", "I dont know"],
        answer: "Hyper Text Markup Language",
        checked:false
    },
    {
        title: "What is an Array?",
        choices: ["A single variable that lets you store multipel elements", "primitive data type", "a conditional statement", "all of the above"],
        answer: "A single variable that lets you store multipel elements",
        checked:false
    },
    {
        title: "What is javascript",
        choices: ["a prototype-based langauge", "a lanague having object oriented features", "both above", "none of the above"],
        answer: "both above",
        checked:false
    },
    {
        title: "What is github?",
        choices: ["the same as git", "the terminal / bash", "not important", "a collaboration site for programmers"],
        answer: "a collaboration site for programmers",
        checked:false
    },
  
  ];

var clock = document.querySelector("#clock");
var startBtn = document.querySelector("#startBtn");
var clearBtn = document.querySelector("#clearBtn");
var submitBtn = document.querySelector("#submitBtn");
var questionsCard = document.querySelector("#questionsCard");


var intro = document.querySelector("#intro");
var inProgress = document.querySelector("#inProgress");
var end = document.querySelector("#end");

var question1Ele = document.querySelector("#question1");
var question2Ele = document.querySelector("#question2");
var question3Ele = document.querySelector("#question3");
var question4Ele = document.querySelector("#question4");

var currentScore = 0;
var questionsIndex = 0;
var timeInSeconds = 30;

// Start the timer
function timer() {
    var none = 0;
    timeInterval = setInterval(function () {
        timeInSeconds--;
      timerDisplay.textContent = "Clock: " + timeInSeconds;
      if (timeInSeconds === none) {
        clearInterval(timeInterval);
        terminate();
      }
    }, 1000);

  }


function terminate () {

    render("end");
        
}

function switchState(element) {


    if (element.classList.contains("hide")) {
        element.classList.remove("hide");
    } 
    if (!element.classList.contains("hide")) {
        element.classList.add("hide");
    } 

}

function isHidden(element) {
    if (element.classList.contains("hide")) {
        return true;
    } else {
        return false;
    }
}

function render(element) {
    switch (element) {
        case "intro":
            if (isHidden(element)) {
                switchState(element);
            } 
        break;
        case "inProgress":
            if (isHidden(element)) {
                switchState(element);
            }
        break;
        case "end":
            if (isHidden(element)) {
                switchState(element);
            } 
        break;
            //negative statements
        case "-intro":
            if (!isHidden(element)) {
                switchState(element);
            } 
         
        break;
        
        case "-inProgress":
            if (!isHidden(element)) {
                switchState(element);
            } 
        break;
        case "-end":
            if (!isHidden(element)) {
                switchState(element);
            } 
        break;
    }
}

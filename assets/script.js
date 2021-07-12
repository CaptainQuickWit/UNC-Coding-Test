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
/*
<header id = "title" class = ""></header>
                <div id = "dynRendering" class = ""></div>
*/

var title = document.querySelector("#title");
var dynRendering = document.querySelector("#dynRendering");
var questionTitle = document.querySelector("#questionTitle");
var clock = document.querySelector("#clock");
var startBtn = document.querySelector("#startBtn");
var clearBtn = document.querySelector("#clearBtn");
var submitBtn = document.querySelector("#submitBtn");
var questionsCard = document.querySelector("#questionsCard");
var footer = document.querySelector("#footer");
var dynRender = document.querySelector("#dynamicRendering");
var intro = document.querySelector("#intro");
var inProgress = document.querySelector("#inProgress");
var end = document.querySelector("#end");

var question1Ele = document.querySelector("#question1");
var question2Ele = document.querySelector("#question2");
var question3Ele = document.querySelector("#question3");
var question4Ele = document.querySelector("#question4");
var currentScore = 0;
var questionsIndex = 0;

var timeInSeconds = 8;
var ulCreated = document.createElement("ul");
// Start the timer
function timer() {
    var none = 0;
    var firstQuestion = questionsIndex;

    renderQuestions(firstQuestion); 
    timeInterval = setInterval(function () {
        timeInSeconds--;
      clock.textContent = "Clock: " + timeInSeconds;
      if (timeInSeconds <= none) {
        clearInterval(timeInterval);
        terminate();
      }
    }, 1000);

  }

    
function renderQuestions(questionIndex) {

    questionsCard.innerHTML = "";
    /*
    var listEl = document.createElement("ul");

    var answersArrayLength = questions[questionIndex].choices.length;
    var li;
    var h2 = document.createElement("h2");
    h2.textContent = questions[questionIndex].title;

    for (var i = 0; i < answersArrayLength; i++) {
        li = document.createElement("li");
        li.textContent = questions[questionIndex].choices[i];
        listEl.appendChild(li);
    }
    questionsCard.appendChild(h2);
    questionsCard.appendChild(listEl);*/

    var answersArrayLength = questions[questionIndex].choices.length;
    var p;
    var h1 = document.createElement("h1");
    h1.textContent = questions[questionIndex].title;
    questionsCard.appendChild(h1);

    for (var i = 0; i < answersArrayLength; i++) {
        h2 = document.createElement("h2");
        h2.textContent = questions[questionIndex].choices[i];
        questionsCard.appendChild(h2);
    }
    
    //questionsCard.appendChild(listEl);
    /*
    dynRender.innerHTML = "";
    question1Ele.innerHTML = "";
    question2Ele.innerHTML = "";
    question3Ele.innerHTML = "";
    question4Ele.innerHTML = "";*/
    //questionsCard.innerHTML = "";
    //ulCreated.innerHTML = "";
    /*
 
    console.log("====="+userQuestion);
    /*
    
    
    
    dynRender.innerHTML = questions[questionIndex].title;
    question1Ele.innerHTML = questions[questionIndex].choices[0];
    question2Ele.innerHTML = questions[questionIndex].choices[1];
    question3Ele.innerHTML = questions[questionIndex].choices[2];
    question4Ele.innerHTML = questions[questionIndex].choices[3];

    questionsCard.appendChild(dynRender);
    questionsCard.appendChild(question1Ele);
    questionsCard.appendChild(question2Ele);
    questionsCard.appendChild(question3Ele);
    questionsCard.appendChild(question4Ele);*/

    

/*  
    */
}




  function removeChildrenByID(id, tag, content,returnEle) {
    
    var element = document.getElementById(id);
    element.innerHTML = "";
  }

  function renderByID(id, tag, content,returnEle) {
    
    var element = document.getElementById(id);
    console.log(`${id}`);
    if (tag) {
        var tagCreated = document.createElement(tag);
    }
    if (content) {
        tagCreated.innerHTML = content;  
    }
    console.log(element);
    if (element) {
        element.appendChild(tagCreated); 
    }
    if (returnEle) {
        return element;
    }
    //element.appendChild(tag); 
    //return element;
  }

  // Compares user choice to the answer
  function compare(event) {

    var element = event.target;

    if (element.matches("li")) {
        var createdDiv = document.createElement("div");
        createdDiv.setAttribute("id", "createdDiv"); 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createdDiv.textContent = "Correct!";
        } else {
            // Sets the seconds left to 10 less than when the question was answered
            secondsLeft = secondsLeft - penalty;
            createdDiv.textContent = "Incorrect!";
        }
    }}

  startBtn.addEventListener("click", function (event) {
    timer();
    //console.log("event registered");
    renderState("-intro");
    renderState("inProgress");
    renderState("-end");

    
    
  });

    function terminate () {
    timeInSeconds = 0;
    renderState("-intro");
    renderState("-inProgress");
    renderState("end");
    renderState("inProgress");

        
    }

function switchState(element) {

    if (element.classList.contains("hide")) {
        element.classList.remove("hide");
    } else {
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


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
var footer = document.querySelector("#footer");

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
    renderQ(0); 

    
    var none = 0;
    timeInterval = setInterval(function () {
        timeInSeconds--;
      clock.textContent = "Clock: " + timeInSeconds;
      if (timeInSeconds <= none) {
        clearInterval(timeInterval);
        terminate();
      }
    }, 1000);
    


  }


    function renderQ(questionIndex) { 
        questionsCard.innerHTML = "";
        ulCreated.innerHTML = "";
    
        for (var i = 0; i < questions.length; i++) {
            // Changes the questionsCard text to be current question
            var userQuestion = questions[questionIndex].title;
            var userChoices = questions[questionIndex].choices;
            questionsCard.textContent = userQuestion;
        }
    
        userChoices.forEach(function (newItem) {
            var listItem = document.createElement("li");
            listItem.textContent = newItem;
            questionsCard.appendChild(ulCreated);
            ulCreated.appendChild(listItem);
            listItem.addEventListener("click", (compare));
        })
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

  /*
  multipleChoiceCard.addEventListener("click", function (event) {
  var event = event.target;
  compareAnswer(event.textContent.trim());
});
  */
  
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


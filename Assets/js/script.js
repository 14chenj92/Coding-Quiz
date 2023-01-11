//array of multiple choice questions
var myquestions = [ 
  {
    question: "Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
    choices: ["a. concat()", "b. pop()", "c. push()", "d. some()"],
    answer: "a"
  },
  {
    question: "Which of the following function of String object returns the calling string value converted to upper case?",
    choices: ["a. toLocaleUpperCase()", "b. toUpperCase()", "c. toString()", "d. substring()"],
    answer: "b"
  },
  {
    question: "Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?",
    choices: ["a. concat()", "b. every()", "c. filter()", "d. some()"],
    answer: "c"
  }
];

var startbutton = document.querySelector("#start-button");
var addons = document.querySelector(".addons");
var highscores = document.querySelector(".highscores");
var timerElement = document.querySelector(".timer-count");
var questions = document.querySelector(".quiz-questions");
var startpage = document.querySelector(".card");
var choicebuttons = document.querySelector(".choice");
var A = document.querySelector("#A");
var B = document.querySelector("#B");
var C = document.querySelector("#C");
var D = document.querySelector("#D");
var answertext = document.querySelector("#answer");
var result = document.querySelector(".finish");
var score = document.querySelector(".finalscore");
var finishscreen = document.querySelector(".finishscreen");
var highscore = document.querySelector(".highscorepage");
var submitbutton = document.querySelector(".submit");
var backbutton = document.querySelector("#back");
var clearbutton = document.querySelector("#clear");
var timer;
var timerCount;
var finalscore = 0;
var questionnumber = 0;
choicebuttons.style.display = "none";
finishscreen.style.display = "none";
highscore.style.display = "none";



function quizstart() {
  starttimer()
  timerCount = 60;
  startquestions(questionnumber);
  startpage.style.display = "none"
  choicebuttons.style.display = "block";
}

function starttimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = "Time Left:" + timerCount;
    if (timerCount === 0) {
      resultscreen();
    }
  }, 1000);
}

function startquestions (i) {
  questions.textContent = myquestions[i].question;
  A.textContent = myquestions[i].choices[0];
  B.textContent = myquestions[i].choices[1];
  C.textContent = myquestions[i].choices[2];
  D.textContent = myquestions[i].choices[3];
  questionnumber = i;
}

function answercheck(event) {
  event.preventDefault();
  if (myquestions[questionnumber].answer === event.target.value) {
    finalscore = finalscore + 1;
    answertext.textContent = "Correct!";
  } else {
    timerCount = timerCount - 10
    answertext.textContent = "Wrong!";
  }      

  if (questionnumber < 2) {
      questionnumber++;
      startquestions(questionnumber);
  } else {
    resultscreen()
  }
}

function resultscreen() {
  finishscreen.style.display = "block";
  addons.style.display = "none";
  choicebuttons.style.display = "none";
  answertext.style.display = "none";
  score.textContent = "Your final score is " + finalscore;
}

function highscorepage() {
  addons.style.display = "none";
  choicebuttons.style.display = "none";
  answertext.style.display = "none";
  startpage.style.display = "none";
  finishscreen.style.display = "none";
  highscore.style.display = "block";
}

function reset () {
  location.reload();
}

function clearlist() {
  localStorage.clear();
  scorelist.innerHTML="";
}

startbutton.addEventListener("click", quizstart);

choicebuttons.addEventListener("click", answercheck);

highscores.addEventListener("click", highscorepage);

submitbutton.addEventListener("click", highscorepage);

backbutton.addEventListener("click", reset);

clearbutton.addEventListener("click", clearlist);
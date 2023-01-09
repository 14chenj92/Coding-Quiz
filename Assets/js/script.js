var startbutton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var questions = document.querySelector(".quiz-questions");
var timer;
var timerCount;

var A = document.querySelector("#A");
var B = document.querySelector("#B");
var C = document.querySelector("#C");
var D = document.querySelector("#D");

startbutton.addEventListener("click", quizstart);

function quizstart() {
  starttimer()
  timerCount = 60;
  startquestions()
}

function starttimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = "Time Left:" + timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        winGame();
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

var myquestions = [ 
  {
    question: "question 1: Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
    choices: ["concat()", "pop()", "push()", "some()"],
    answer: "a"
  },
  {
    question: "Which of the following function of String object returns the calling string value converted to upper case?",
    choices: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "substring()"],
    answer: "b"
  },
  {
    question: "Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?",
    choices: ["concat()", "every()", "filter()", "some()"],
    answer: "c"
  }
];


function startquestions (i) {
  questions.textContent = myquestions[i].question;
  A.textContent = myquestions[i].choices[0];
  B.textContent = myquestions[i].choices[1];
  C.textContent = myquestions[i].choices[2];
  D.textContent = myquestions[i].choices[3];
  questionNumber = i;
}

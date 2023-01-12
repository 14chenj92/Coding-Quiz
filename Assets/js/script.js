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
  },
  {
    question: "The function and var are known as:",
    choices: ["a. keywords", "b. data types", "c. declaration statements", "d. prototypes"],
    answer: "c"
  },

  {
    question: "Which of the following number object function returns the value of the number?",
    choices: ["a. toString()", "b. valueOf()", "c. toLocaleString()", "d.  toPrecision()"],
    answer: "b"
  },
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
var scorelist = document.querySelector("#scorelist");
var backbutton = document.querySelector("#back");
var clearbutton = document.querySelector("#clear");
var initials = document.querySelector("#initial");
var timer;
var timerCount;
var finalscore = 0;
var questionnumber = 0;
choicebuttons.style.display = "none";
finishscreen.style.display = "none";
highscore.style.display = "none";

//function to start the quiz 
function quizstart() {
  starttimer()
  timerCount = 60;
  startquestions(questionnumber);
  startpage.style.display = "none"
  choicebuttons.style.display = "block";
}

//shows and starts the timer
function starttimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = "Time Left:" + timerCount;
    if (timerCount === 0) {
      resultscreen();
    }
  }, 1000);
}

//displays multiple choice on screen
function startquestions (i) {
  questions.textContent = myquestions[i].question;
  A.textContent = myquestions[i].choices[0];
  B.textContent = myquestions[i].choices[1];
  C.textContent = myquestions[i].choices[2];
  D.textContent = myquestions[i].choices[3];
  questionnumber = i;
}

//checks if answer is correct or wrong
function answercheck(event) {
  event.preventDefault();
  if (myquestions[questionnumber].answer === event.target.value) {
    finalscore = finalscore + 1;
    answertext.textContent = "Correct!";
  } else {
    timerCount = timerCount - 10
    answertext.textContent = "Wrong!";
  }      

  if (questionnumber < 4) {
      questionnumber++;
      startquestions(questionnumber);
  } else {
    resultscreen()
  }
}

//displays score for quiz + enter initials input
function resultscreen() {
  finishscreen.style.display = "block";
  addons.style.display = "none";
  choicebuttons.style.display = "none";
  answertext.style.display = "none";
  score.textContent = "Your final score is " + finalscore;
}

//displays highscorespage
function highscorepage() {
  addons.style.display = "none";
  choicebuttons.style.display = "none";
  answertext.style.display = "none";
  startpage.style.display = "none";
  finishscreen.style.display = "none";
  highscore.style.display = "block";
  highscorerecord ()
}

//back button resets the page
function reset () {
  location.reload();
}

//stores inputs and records them on highscore page
function highscorerecord () {
  localStorage.setItem("finalscore", JSON.stringify(finalscore));
  localStorage.setItem("username", JSON.stringify(initials.value));
  var usernameinput = JSON.parse(localStorage.getItem("finalscore"));
  var finalscoreinput = JSON.parse(localStorage.getItem("username"));
  scorelist.textContent = (usernameinput + "-" + finalscoreinput);
  var ol = document.getElementById("scorelist");
  ol.appendChild(li);
}


//clears the highscore list
function clearlist() {
  localStorage.clear();
  scorelist.innerHTML="";
}

//event listeners button click to activate functions
startbutton.addEventListener("click", quizstart);

choicebuttons.addEventListener("click", answercheck);

highscores.addEventListener("click", highscorepage);

submitbutton.addEventListener("click", highscorepage);

submitbutton.addEventListener("click", highscorerecord);

backbutton.addEventListener("click", reset);

clearbutton.addEventListener("click", clearlist);

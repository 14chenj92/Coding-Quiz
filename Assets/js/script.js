var startbutton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var questions = document.querySelector(".quiz-questions");
var timer;
var timerCount;

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


function startquestions() {
  myquestions
}

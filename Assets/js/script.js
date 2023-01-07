var button = document.querySelector(".startbutton");

var timerCount = 60;

button.addEventListener("click", function() {
  var timeInterval = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if(timerCount === 0) {
      clearInterval(timeInterval);
    }
}, 1000);
})



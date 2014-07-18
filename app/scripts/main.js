$(document).ready(function(){

  var timer = document.getElementsByClassName("timer")[0],
      timerForm = document.getElementsByClassName("js-timer-form")[0];


  function executeTimer(time) {
    timer.innerText = time;

    var timerLoop = setInterval(function(){
      time --;

      timer.innerText = time;

      if (time === -1) {
        clearInterval(timerLoop);

        showEndMessage();
      }

    }, 1000);
  }


  function showEndMessage() {
    timer.innerText = "Timer Complete!"
  }


  timerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var timerFormValue = document.getElementById("time").value;

    executeTimer(timerFormValue);

  }, false);

});
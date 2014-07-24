$(document).ready(function(){

  var timer = document.getElementsByClassName("js-timer")[0],
      timerForm = document.getElementsByClassName("js-timer-form")[0],
      output = document.getElementsByClassName("js-timer-output")[0];

  var intervalHandle,
      secondsRemaining;


  function initialize() {

    centerElement(timer);

    window.addEventListener("resize", function(){
    
      centerElement(timer);

    }, false);
  }


  function centerElement(el) {
    
    el.setAttribute("style", "top:" + (window.innerHeight - timer.clientHeight)/2 + "px; " 
      + "left:" + (window.innerWidth - el.clientWidth)/2 + "px;");
  }


  function startCountdown(e) {

    e.preventDefault();

    var time = document.getElementById("time").value;      

    secondsRemaining = Number(time) * 60;

    if ( isValidNumber(time) ) {
      intervalHandle = setInterval(function(){
        tick(time);
      }, 1000);
    }
  }


  function tick(time) {

    var min = Math.floor(secondsRemaining / 60),
        sec = secondsRemaining - (min * 60);

    if (sec < 10) {
      sec = "0" + sec;
    }
        
    var message = min + ":" + sec;

    timerForm.innerText = "";
    output.innerText = message;
    centerElement(timer);

    secondsRemaining --;

    if (secondsRemaining === -1) {
      clearInterval(intervalHandle);

      output.innerHTML = "<h2>Timer <br> Complete!</h2>";
      centerElement(timer);
    }
  }


  function isValidNumber(time) {
    
    if (isNaN(time) || time === "" ) {
      
      alert("Please enter a number!");
      clearForm();

      return;
    }

    return true;
  }


  function clearForm() {
    document.getElementById("time").value = "";      
  }


  initialize();
  timerForm.addEventListener("submit", startCountdown, false);
});



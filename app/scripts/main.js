$(document).ready(function(){

  var timer = document.getElementsByClassName("js-timer")[0],
      timerForm = document.getElementsByClassName("js-timer-form")[0],
      output = document.getElementsByClassName("js-timer-output")[0];


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

    if ( isValidNumber(time) ) {

      // turn 1.5 to 1:30


      
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



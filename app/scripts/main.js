$(document).ready(function(){

  var timer = document.getElementsByClassName("js-timer")[0],
      timerForm = document.getElementsByClassName("js-timer-form")[0],
      output = document.getElementsByClassName("js-timer-output")[0];

  function centerVertically (elem) {
    elem.setAttribute("style", "top:" + (window.innerHeight - timer.clientHeight)/2 + "px; " 
      + "left:" + (window.innerWidth - elem.clientWidth)/2 + "px;");
  }

  function processForm (timerForm) {
    var timerFormValue = document.getElementById("time").value;      
    return timerFormValue;  
  }


  function checkValidNumber(timerFormValue) {

    if (isNaN(timerFormValue) || timerFormValue === "" ) {
      
      alert("Please enter a number!");
      clearForm();
    
    } else {
      
      executeTimer(timerFormValue);  
    }
  }


  function clearForm() {
    document.getElementById("time").value = "";      
  }


  function executeTimer(time) {
    timerForm.innerText = "";
    output.innerText = time;
    centerVertically(timer);

    var timerLoop = setInterval(function(){
      time --;

      output.innerText = time;
      centerVertically(timer);

      if (time === -1) {
        clearInterval(timerLoop);

        showEndMessage();
        centerVertically(timer);
      }

    }, 1000);
  }


  function showEndMessage() {
    output.innerHTML = "<h2>Timer <br> Complete!</h2>";
  }

  centerVertically(timer);
  window.addEventListener("resize", function(){
    centerVertically(timer);
  }, false);

  timerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var timerFormValue = processForm(timerForm);
    
    checkValidNumber(timerFormValue);
    

  }, false);

});
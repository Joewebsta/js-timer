$(document).ready(function(){

  var timer = document.getElementsByClassName("js-timer")[0],
      timerForm = document.getElementsByClassName("js-timer-form")[0],
      output = document.getElementsByClassName("js-timer-output")[0];


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

    var timerLoop = setInterval(function(){
      time --;

      output.innerText = time;

      if (time === -1) {
        clearInterval(timerLoop);

        showEndMessage();
      }

    }, 1000);
  }


  function showEndMessage() {
    output.innerText = "Timer Complete!";
  }


  timerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var timerFormValue = processForm(timerForm);
    
    checkValidNumber(timerFormValue);
    

  }, false);

});
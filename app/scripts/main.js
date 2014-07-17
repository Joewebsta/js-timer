$(document).ready(function(){

  var body = document.getElementsByTagName("body")[0],
      timerForm = document.getElementsByClassName("js-timer-form")[0];


  timerForm.onsubmit = function(e) {
    e.preventDefault();

    var timerFormValue = document.getElementById("time").value;

    body.innerHTML = timerFormValue;

     var hello = setInterval(function(){
      timerFormValue--
      
      body.innerHTML = timerFormValue;

      if (timerFormValue === 0) {
        clearInterval(hello);
      }      

    }, 1000);
  }
});
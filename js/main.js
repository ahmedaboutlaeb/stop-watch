
window.onload = function (){
  var minutes = 0;
  var seconds = 0; 
  var tens = 0; 
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds")
  var appendMinutes = document.getElementById("minutes");
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var interval ;


  buttonStart.onclick = function(){
    clearInterval(interval);
    interval = setInterval(timerstart,10);
  }
  
  buttonStop.onclick= function(){
    clearInterval(interval);
  }
  
  buttonReset.onclick= function(){
    clearInterval(interval);
    seconds = "00";
    tens = "00";
    minutes = "00"
    appendSeconds.innerHTML = "00";
    appendTens.innerHTML = "00";
    appendMinutes.innerHTML = "00";
  
  }
  

function timerstart(){
  tens++;
  if (tens < 9){
    appendTens.innerHTML = "0"+ tens;

  }
  if (tens>9){
    appendTens.innerHTML = tens; 
    
  }
  if (tens>99){
    seconds++;
    appendSeconds.innerHTML = "0"+seconds;
    tens = 0;
    appendTens.innerHTML = "0"+ tens;
  }
  if (seconds>9){
    appendSeconds.innerHTML = seconds;
  }
  if (seconds>60){
    minutes++
    appendMinutes.innerHTML = "0"+ minutes;
    seconds = 0;
    tens = 0;
    appendSeconds.innerHTML = "0"+ seconds;
    appendTens.innerHTML = "0" + tens;
  }
  if(minutes>9){
    appendMinutes.innerHTML = minutes;

  }

}



}

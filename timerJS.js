var orig = true;
var tick;
var keepGoing = true;
var pomodoro = true;
var short = false;
var long = false;


function functDefaultPom(){
  clearInterval(tick);
  document.getElementById('hour').innerHTML = 25;
  document.getElementById('min').innerHTML = "0"+0;
  pomodoro = true;
  short = false;
  long = false;
  document.getElementById("ptimer").style.color = "white";
  document.getElementById("stimer").style.color = "#AC3B61";
  document.getElementById("ltimer").style.color = "#AC3B61";
}
function functDefaultShort(){
  clearInterval(tick);
  document.getElementById('hour').innerHTML = 5;
  document.getElementById('min').innerHTML = "0"+0;
  pomodoro = false;
  short = true;
  long = false;
  document.getElementById("ptimer").style.color = "#AC3B61";
  document.getElementById("stimer").style.color = "white";
  document.getElementById("ltimer").style.color = "#AC3B61";
}
function functDefaultLong(){
  clearInterval(tick);
  document.getElementById('hour').innerHTML = 15;
  document.getElementById('min').innerHTML = "0"+0;
  pomodoro = false;
  short = false;
  long = true;
  document.getElementById("ptimer").style.color = "#AC3B61";
  document.getElementById("stimer").style.color = "#AC3B61";
  document.getElementById("ltimer").style.color = "white";
}
function funcReset(){
  clearInterval(tick);
  if(pomodoro){
    document.getElementById('hour').innerHTML = 25;
    document.getElementById('min').innerHTML = "0"+0;
  }
  else if(long){
    document.getElementById('hour').innerHTML = 15;
    document.getElementById('min').innerHTML = "0"+0;
  }
  else{
    document.getElementById('hour').innerHTML = 5;
    document.getElementById('min').innerHTML = "0"+0;
  }
}
function funcStart(){
   var m = document.getElementById('min').innerHTML
   var h = document.getElementById('hour').innerHTML
   tick = setInterval(function() {
      if((h == 0) && (m == 0)){
          functReset();
      }
      if(m == 0){
        m = 59;
        h--;
        document.getElementById('min').innerHTML = m;
        document.getElementById('hour').innerHTML = h;
      }
      else{
        m--;
        if(m < 10){
          document.getElementById('min').innerHTML = "0"+m;
        }
        else{
          document.getElementById('min').innerHTML = m;
        }
      }
  }, 1000);
}

function funcPause(){
  clearInterval(tick);
}

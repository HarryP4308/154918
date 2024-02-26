var countDownDate = new Date("March 7, 2024 00:00:00").getTime();

  // The setinterval runs a function for a number of milliseconds
var x = setInterval(function startCountdown() {
 
  var now = new Date().getTime();
// Distance is the number of milliseconds difference between the beginning and the end
  var distance = countDownDate - now;
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 29)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//This displays the number of days,hours,minutes and seconds left
  document.getElementById("timer").innerHTML = days +"d"+":"+ hours +"h" +":" + minutes + "m" + ":" + seconds + "s";
//This restarts the code after the timer stops
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
    startCountdown();
  }
}, 1000);
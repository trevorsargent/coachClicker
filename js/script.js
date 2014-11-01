var numCoaches = 0;
var coachesPerSec = 1;
var clincrement = 1;

setInterval(function(){
  numCoaches += coachesPerSec;
  refresh();
}, 1000);

refresh = function(){
  $("#coach-count").html(numCoaches + " Coaches");
  $("#coaches-per-sec").html(coachesPerSec + " Coaches per second");
  $("title").html("Coach Clicker: " + numCoaches + " Coaches")
}

onClick = function(){
    numCoaches += clincrement;
    console.log(numCoaches);
    refresh();
}


$(document).ready(function(){
  $("#head-coach").click(function(){
    onClick();
  });
});

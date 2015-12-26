// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require jquery.turbolinks
//= require_tree .

$(document).ready(function(){
  document.getElementById("start").onclick = start;
  document.getElementById("resume").onclick = resume;
  document.getElementById("stop").onclick = stop;
})

var count;
var tick=null;
var running = false;

function display()
{
  var micro = count/100;
  var sec = parseInt(micro%60);
  var min = parseInt(micro/60) % 60;
  var hr =  parseInt(micro/3600);
  micro = count%100;

  var hr_zero="",min_zero="",sec_zero="",micro_zero="";

  if(hr<10)
    hr_zero ="0";
  if(min<10)
    min_zero ="0";
  if(sec<10)
    sec_zero ="0";
  if(micro<10)
    micro_zero ="0";

  document.getElementById("hour").innerHTML = hr_zero+hr;
  document.getElementById("minute").innerHTML = min_zero+min;
  document.getElementById("second").innerHTML = sec_zero+sec;
  document.getElementById("micro").innerHTML = micro_zero+micro;
}

function countdowns() {
  display();
  count++;
  tick = setTimeout("countdowns()", 10);
}

function start()
{
  count=0;
  clearTimeout(tick);
  running=true;
  countdowns();
}

function resume()
{
  if(tick!=null && !running)
  {
    running=true;
    countdowns();
  }
}

function stop()
{
  running = false;
  clearTimeout(tick);
}

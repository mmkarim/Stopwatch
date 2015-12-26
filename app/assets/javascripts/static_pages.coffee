count = 0
tick = null
running = false

display = ->
  micro = count / 100
  sec = parseInt(micro % 60)
  min = parseInt(micro / 60) % 60
  hr = parseInt(micro / 3600)
  micro = count % 100
  hr_zero = ""
  min_zero = ""
  sec_zero = ""
  micro_zero = ""
  hr_zero = "0"  if hr < 10
  min_zero = "0"  if min < 10
  sec_zero = "0"  if sec < 10
  micro_zero = "0"  if micro < 10
  document.getElementById("chour").innerHTML = hr_zero + hr
  document.getElementById("cminute").innerHTML = min_zero + min
  document.getElementById("csecond").innerHTML = sec_zero + sec
  document.getElementById("cmicro").innerHTML = micro_zero + micro

countdowns = ->
  display()
  count++
  tick = setTimeout ( ->
    countdowns()
  ), 10

start = ->
  count = 0
  clearTimeout tick
  running = true
  countdowns()

resume = ->
  if tick? and not running
    running = true
    countdowns()

stop = ->
  running = false
  clearTimeout tick

$(document).ready ->
  document.getElementById("cstart").onclick = start
  document.getElementById("cresume").onclick = resume
  document.getElementById("cstop").onclick = stop

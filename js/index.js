$(document).ready(function() {
  $('#headline').typeIt({
     speed: 50,
     autoStart: false,
     loop:true,
})
.tiType('Always Looking Forward to New Challenges.')
.tiPause(3000)
.tiDelete(50)
.tiPause(300)
});
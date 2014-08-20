$(document).ready(function() {

  var ryu_is_cool = false;
  var ryu_is_hadoukening = false;

  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();

  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() { 
    if(ryu_is_cool) {

    } else {
      ryu_is_hadoukening = true;
      playHadouken();    
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $(".ryu-still").hide();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      });
    }
   
  })
  .mouseup(function() {
    if(ryu_is_cool == false) {
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').hide();
    ryu_is_hadoukening = false;
  }
  });

  
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

$(document).keydown(function() {
         if(event.keyCode == 88 && ryu_is_hadoukening == false){
          console.log("keydown");
          $('.ryu-still').hide();
          $('.ryu-ready').hide();
          $('.ryu-cool').show();
          ryu_is_cool = true;
         }
     }); 
$(document).keyup(function() {
         if(event.keyCode == 88 && ryu_is_hadoukening == false){
          $('.ryu-still').show();
          $('.ryu-ready').hide();
          $('.ryu-cool').hide();
          ryu_is_cool = false;
         }
     }); 

});
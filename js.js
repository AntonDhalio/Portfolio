$(document).ready(function(){
    $('.länkBild').mouseenter(function(){
      $(this).animate({
          width: '30%'
      });
    });
    $('.länkBild').mouseleave(function(){
        $(this).animate({
            width: '21%'
        });
    });
});
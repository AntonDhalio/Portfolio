var startSlideshow = '';
var playing = false;
function startSS() {
  playing = true;
  $('.img-container > div:gt(0)').hide();
  startSlideshow = setInterval(function gallery(){
    var image = $('.img-container > div:first');
    image.fadeOut(2000).next().fadeIn().end().appendTo(".img-container");
  },3000);
}
startSS();

$('.pause').click(function(){
  if(playing === true){
    clearInterval(startSlideshow);
    playing = false;
  }
  else {
    startSS();
  }
})
function getFullscreenElement() {
  return document.fullscreenElement
  || document.msFullscreenElement
  || document.mozFullscreenElement
  || document.webkitFullscreenElement;
}

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  }
  else {
    document.getElementById("slideshow").requestFullscreen().catch(console.log);
    }
};

var klickTid = 0;
$("#slideshow").on("click", function() {
  if(klickTid == 0) {
    klickTid = new Date().getTime();
  }
  else {
    if(((new Date().getTime()) - klickTid) < 800) {
      toggleFullscreen();
      klickTid = 0;
    }
    else {
      klickTid = new Date().getTime();
    }
  }
})


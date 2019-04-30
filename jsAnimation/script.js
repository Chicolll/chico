var img = document.getElementsByTagName('img')[0];
// [0] is opetional because there is only one image
img.style.left = '0px';
var kittyWalk = function(){
  var initPos = parseInt(img.style.left);
  var newPos = initPos + 50;
  img.style.left = newPos + 'px';
  if(img.stle.left > window.innerWidth){
    img.style.left = '0px';
  }
}


window.setInterval(kittyWalk, 41.66666);

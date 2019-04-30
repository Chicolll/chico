var fish = document.getElementById("fish");
fish.style.paddingLeft = "550px";
fish.style.paddingTop = "10px";
fish.style.width = "20%";
fish.style.position = "absolute";

function changePosition(){
  var currX = parseInt(fish.style.paddingLeft);
  var currY = parseInt(fish.style.paddingTop);
  var cursorX = event.clientX;
  var cursorY = event.clientY;
  fish.style.paddingLeft = (cursorX-120)+'px';
  fish.style.paddingTop = (cursorY-70)+'px';
}

document.addEventListener("click", changePosition);

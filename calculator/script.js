function squareNumber(){
  var num = document.getElementById("square-input").value;
  var result = num*num;
  if(Number.isInteger(result) != true){
    result = result.toFixed(2);
  }
  console.log('The result of squaring the number '+num+' is '+result);
  solution.innerText = 'The result of squaring the number '+num+' is '+result;
  return result;
}

function halfNumber(){
  var num = document.getElementById("half-input").value;
  var result = num/2;
  if(Number.isInteger(result) != true){
    result = result.toFixed(2);
  }
  console.log("Half of "+num+' is '+result);
  solution.innerText = "Half of "+num+' is '+result;
  return result;
}

function percentOf(){
  num1 = document.getElementById("percent1-input").value;
  num2 = document.getElementById("percent2-input").value;
  var result = (num1/num2*100);
  if(Number.isInteger(result) != true){
    result = result.toFixed(2)+'%';
  }
  else {
    result = result+'%';
  }
  console.log(num1+' is '+result+' of '+num2);
  solution.innerText = num1+' is '+result+' of '+num2;
  return result;
}
function areaOfCircle(){
  radius = document.getElementById("area-input").value;
  var result = radius*radius*Math.PI;
  if(Number.isInteger(result) != true){
    result = result.toFixed(2);
  }
  console.log("The area for a circle with radius "+radius+" is "+result)
  solution.innerText = "The area for a circle with radius "+radius+" is "+result;
  return result;
}

var squareButton = document.getElementById('square-button');
squareButton.addEventListener('click',squareNumber)

var halfButton = document.getElementById('half-button');
halfButton.addEventListener('click',halfNumber)

var percentButton = document.getElementById('percent-button');
percentButton.addEventListener('click',percentOf)

var areaButton = document.getElementById('area-button');
areaButton.addEventListener('click',areaOfCircle)

var solution = document.getElementById('solution');

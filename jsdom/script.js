var heading = document.getElementById('title')

var name = " Chico's "

heading.innerText = 'Enter' + name + 'Information'

document.getElementById('main').innerHTML = '<h3> Hello World Smaller</h3>'

var paragraphs = document.getElementsByTagName('p')
console.log(paragraphs[0].innerText)

heading.addEventListener('click', function(){
  alert('lol')
})
function myFunction(){
  var letter = document.getElementById('myInput').value
  if(letter === 'b'){
    alert('You got it!!')
  }
  else{
    alert('Nope')
  }
}

function MADLIB(){
  var name = document.getElementById('name').value
  var adjective = document.getElementById('adjective').value
  var noun = document.getElementById('noun').value

  alert(name + " ate a "+ adjective+noun);
}

$(document).ready(function(){
  console.log("This document is loaded and ready")
})
$('#btn1').click(function(){
  $('p').fadeOut(2000)
})
$('#btn2').click(function(){
  $('p').fadeIn(2000)
})

$('#btn3').click(function(){
  $('img').slideUp();
})
$('#btn4').click(function(){
  $('img').slideDown();
})
$('#para1').click(function(){
  $(this).hide();
})

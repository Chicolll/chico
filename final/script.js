window.addEventListener('scroll', function(){
  var c = document.getElementById('section1');
  var bounding = c.getBoundingClientRect();
  if (
  	bounding.top <= 60

  ) {
  	console.log('In the viewport!');
    var pos = $('#date').offset();
    $('.post').each(function () {
        if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
            var newDescr = $(this).find('.description').text();
            var oldDescr = $( "#date" ).html();

            $('#date').html(newDescr);
            if(newDescr !== oldDescr) {
                $( "#date" ).css('opacity', 0.4).animate({ 'opacity': '1',}, 500);
            return;
            }
        }
    });
  } else {
  	console.log('Not in the viewport... whomp whomp');
    var pos = $('#date').offset();
    $('.post').each(function () {
        if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
            var newDescr = '';
            var oldDescr = $( "#date" ).html();

            $('#date').html(newDescr);
            if(newDescr !== oldDescr) {
                $( "#date" ).css('opacity', 0.2).animate({ 'opacity': '1',}, 500);
            return;
            }
        }
    });

  }

})

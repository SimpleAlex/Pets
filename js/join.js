$(document).ready(function() {

	$('.button').click(function() {
		$('.form').slideToggle(500);
	});

	$(window).resize(function() {
		if ($(window).width() > 500 ) {
			$('.name, .email').removeAttr('style');
		}
	});

});
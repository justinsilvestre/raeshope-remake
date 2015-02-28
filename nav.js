
$(document).ready(function() {
	$('.donation').hover(function() {
		$(this).animate({top:"+=10px"},400);
	},
	function() {
		$(this).animate({top:"-=10px"},400)
	});

	$('#menu li').bind('mouseenter', function() {
		$(this).find('ul').first().fadeIn('fast');
	});
	$('#menu li').bind('mouseleave', function() {
		$(this).find('ul').first().fadeOut('fast');
	});

});

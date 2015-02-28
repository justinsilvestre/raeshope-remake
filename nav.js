
$(document).ready(function() {
	$('.donation').hover(function() {
		$(this).animate({top:"+=10px"},400);
	},
	function() {
		$(this).animate({top:"-=10px"},400)
	});

});


$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger, .navigate__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$(".footer__title").click(function(event) {
		$(this).toggleClass("active").next().slideToggle(500);
	});
});
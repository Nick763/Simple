$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.search-box__search-btn').click(function(event) {
		$('.search-box, .search-box__search-btn, .search-box__search-txt').toggleClass('active');
		$('.menu__list li').toggleClass('go-left');
	});
});

console.log('hello');
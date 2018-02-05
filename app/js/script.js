// burger nav //
var burger = document.querySelectorAll('.header__nav--burger div');
var nav = document.querySelector('.header__nav');
var burger1 = document.querySelector('.burger-1');
var burger2 = document.querySelector('.burger-2');
var burger3 = document.querySelector('.burger-3');

for (var i =0; i < burger.length; i++) {
	burger[i].addEventListener('click', function() {
		nav.classList.toggle('hidden-nav');
		burger1.classList.toggle('burger-transform-1');
		burger2.classList.toggle('hidden');
		burger3.classList.toggle('burger-transform-2');

	});
}


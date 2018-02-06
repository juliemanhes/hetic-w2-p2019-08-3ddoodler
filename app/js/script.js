// burger nav //
var burger = document.querySelector('.header__nav--burger');
var nav = document.querySelector('.header__nav');
var burger1 = document.querySelector('.burger-1');
var burger2 = document.querySelector('.burger-2');
var burger3 = document.querySelector('.burger-3');

burger.addEventListener('click', function() {
	nav.classList.toggle('hidden-nav');
	burger1.classList.toggle('burger-transform-1');
	burger2.classList.toggle('hidden');
	burger3.classList.toggle('burger-transform-2');
});

//nav tab//

var arrow = document.querySelectorAll('.header__nav-arrow');
var list = document.querySelectorAll('.header__nav-tab');

for (let i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener('click', function() {
		list[i].classList.toggle('hidden-tab');
		this.classList.toggle('rotate-arrow');
	});

}

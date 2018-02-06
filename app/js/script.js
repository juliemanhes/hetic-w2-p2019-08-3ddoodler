// burger nav //
var burger = document.querySelector('.header__nav--burger');
var nav = document.querySelector('.header__nav');
var burger1 = document.querySelector('.burger-1');
var burger2 = document.querySelector('.burger-2');
var burger3 = document.querySelector('.burger-3');

if (burger) {
	burger.addEventListener('click', function() {
		nav.classList.toggle('hidden-nav');
		burger.style.background = 'transparent';
		burger1.classList.toggle('burger-transform-1');
		burger2.classList.toggle('hidden');
		burger3.classList.toggle('burger-transform-2');
	});
}

//nav tab//
var arrow = document.querySelectorAll('.header__nav-arrow');
var list = document.querySelectorAll('.header__nav-tab');

document.addEventListener('wheel', function (event) {
	if (!burger.classList.contains('home-burger')) {
		if (document.body.scrollTop  > 500 || event.pageY > 500) {
			burger.style.background = '#05DFE0';
		}
		else if (document.body.scrollTop  < 500 || event.pageY < 500) {
			burger.style.background = 'transparent';
		}
	}
});

if (arrow) {
	for (let i = 0; i < arrow.length; i++) {
		arrow[i].addEventListener('click', function() {
			list[i].classList.toggle('hidden-tab');
			this.classList.toggle('rotate-arrow');
		});
	}
}

//product//

var productContainer = document.querySelector('.product');
var products = document.querySelectorAll('.product .doodler');
var next = document.querySelector('.product .next');
var prev = document.querySelector('.product .prev');

function homeSlider() {
	if (productContainer) {
		for (let i = 0; i < products.length; i++) {
			if (i < 2) {
				products[i+1].style.display = 'none';
				prev.style.display = 'none';
			}
		}

		var y = 0;
		next.addEventListener('click', function(e) {
			products[y].style.display = 'none';
			prev.style.display = 'block';
			y++;
			products[y].style.display = 'flex';

			if (y === products.length-1) {
				next.style.display = 'none';
			}
		});

		prev.addEventListener('click', function(e) {
			products[y].style.display = 'none';
			next.style.display = 'block';
			y--;
			products[y].style.display = 'flex';

			if (y === 0) {
				prev.style.display = 'none';
			}
		});
	}
}

if (window.innerWidth <= 800) {
	homeSlider();
}

window.addEventListener("resize", function() {
	if (window.innerWidth <= 800) {
		homeSlider();
	} else {
		for (let i = 0; i < products.length; i++) {
				products[i].style.display = 'flex';
		}
	}
});

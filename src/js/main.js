document.addEventListener('DOMContentLoaded', function () {
	const menuBurger = document.querySelector('.toggle-menu');
	const navmenu = document.querySelector('.navmenu');

	menuBurger.addEventListener('click', function () {
		this.classList.toggle('active');
		navmenu.classList.toggle('active');
	});

	//Клик в окне навигации
	navmenu.addEventListener('click', function () {
		this.classList.remove('active');
		menuBurger.classList.remove('active');
	});

	//Ресайз окна
	window.addEventListener('resize', function () {
		navmenu.classList.remove('active');
		menuBurger.classList.remove('active');
	});

	$("#navAccordion").hover(function () {
		if ($(window).width() > 576) {
			$(".submenu").slideToggle('fast');
		}
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		nav: true,

		responsive: {
			0: {
				items: 1,
				dots: false,
				margin: 20,
			},
			768: {
				items: 2,
				dots: false,
				margin: 40,
			},
			1000: {
				items: 4,
				dots: true,
				margin: 40,
			}
		}
	})

});
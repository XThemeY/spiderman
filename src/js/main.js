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
		if ($(window).width() > 499) {
			$(".submenu").slideToggle('fast');
		}
	});

	// $('.owl-carousel').owlCarousel({
	// 	loop: true,
	// 	nav: true,

	// 	responsive: {
	// 		0: {
	// 			items: 1,
	// 			dots: false,
	// 			margin: 20,
	// 		},
	// 		768: {
	// 			items: 2,
	// 			dots: false,
	// 			margin: 40,
	// 		},
	// 		1000: {
	// 			items: 4,
	// 			dots: true,
	// 			margin: 40,
	// 		}
	// 	}
	// })

	new Swiper('.swiper-container', {

		slidesPerView: 4,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		spaceBetween: 30,
		freeMode: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});
});
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

});
const navButton = document.querySelector('.nav-button');
const navLinks = document.querySelector('.nav-links');

toggleNavLinks = () => {
	navButton.classList.toggle('open')
	navLinks.classList.toggle('open')
}

navButton.addEventListener('click', toggleNavLinks)


// swiper 
var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});
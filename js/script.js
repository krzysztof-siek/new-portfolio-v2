const navButton = document.querySelector('.nav-button');
const navLinks = document.querySelector('.nav-links');

toggleNavLinks = () => {
	navButton.classList.toggle('open')
	navLinks.classList.toggle('open')
}

navButton.addEventListener('click', toggleNavLinks)
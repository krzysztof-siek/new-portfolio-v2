 
 const backToTop = () => {

	 const pageUp = document.querySelector('.page-up')
	 let scrollY = window.scrollY;
    if (scrollY >= 200) {
		pageUp.classList.add('show')
    } else {
		pageUp.classList.remove('show')
		
	}
}
	

	window.addEventListener('scroll', backToTop)

window.addEventListener('load', (event) => { 
	const body = document.querySelector('body')
	const loader = document.querySelector(".loader-background");
	body.classList.remove('blocked')
    loader.classList.add("hide");
})

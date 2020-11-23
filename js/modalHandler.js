const downloadCvBtn = document.querySelector('.download-cv');
const closeModalBtn = document.querySelector('.close-modal-btn')
const modalBg = document.querySelector('.modal-background');
const body = document.querySelector('body')



closeModalBtn.addEventListener('click', () => {
	modalBg.classList.add('hide')
	body.classList.remove('blocked')
})

downloadCvBtn.addEventListener('click', () => {
	modalBg.classList.remove('hide')
	body.classList.add('blocked')
})
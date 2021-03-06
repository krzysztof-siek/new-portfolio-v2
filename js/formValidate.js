const contactForm = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactSubmit = document.getElementById('contactSubmit')

let nameError = true
let emailError = true
let messageError = true




name.addEventListener('change', function(e) {
	let element = `help-${e.target.name}`
	let help = document.querySelector(`.${element}`)
	if(e.target.value.length >= 3) {
		help.classList.add('hide')
		name.classList.add('verify')
		name.classList.remove('error')
		nameError = false;
	} else {
		name.classList.remove('verify')
		help.classList.remove('hide')
		name.classList.add('error')
		nameError = true;
	}
})

email.addEventListener('change', function(e) {
	let emailValue = e.target.value
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let result = re.test(String(emailValue).toLowerCase());
	let element = `help-${e.target.name}`
	let help = document.querySelector(`.${element}`)
	if(result) {
		help.classList.add('hide')
		email.classList.add('verify')
		email.classList.remove('error')
		emailError = false;
	} else {
		email.classList.remove('verify')
		help.classList.remove('hide')
		email.classList.add('error')
		emailError = true;
	}
})

message.addEventListener('change', function(e) {
	let element = `help-${e.target.name}`
	let help = document.querySelector(`.${element}`)
	if(e.target.value.length >= 10) {
		messageError = false;
		help.classList.add('hide')
		message.classList.remove('error')
	} else {
		messageError = true;
		help.classList.remove('hide')
		message.classList.add('error')
	}
	
})


contactForm.addEventListener('submit', function(e) {
	e.preventDefault();
	if(!nameError && !emailError && !messageError) {
		nameVal = name.value;
		emailVal = email.value;
		messageVal = message.value;
		contactForm.submit(function (e) {
		    e.preventDefault();
		});
		const formSent = document.querySelector('.form-sent')
		 formSent.classList.add('show')
         const hideSentForm = () => {
			name.value = "";
			email.value = "";
			message.value = "";
             formSent.classList.remove('show')
         }
         setTimeout(hideSentForm, 3000);
	} else {
		if(nameError) {
			name.classList.remove('verify')
			let help = document.querySelector(`.help-name`)
			help.classList.remove('hide')
			name.classList.add('error')
		} 
		if(emailError) {
			email.classList.remove('verify')
			let help = document.querySelector(`.help-email`)
			help.classList.remove('hide')
			email.classList.add('error')
		} 
		if(messageError) {
			message.classList.remove('verify')
			let help = document.querySelector(`.help-message`)
			help.classList.remove('hide')
			message.classList.add('error')
		}
	}
})

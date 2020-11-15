  // skills change content when mouse on
  const skillsIcons = document.querySelectorAll('.skills-icon')

  skillsIcons.forEach(el => el.addEventListener('mouseover', function () {
	  let data = this.getAttribute('data-icon')
	  const technology = document.getElementById('skills-technology')
	  const description = document.getElementById('skills-description')
	  const content = document.getElementById('skills-content')
	  const percent = document.getElementById('skills-percent')
	  if (data == "html") {
		  technology.textContent = "HTML"
		  description.textContent = "I use tags in accordance with W3C semantics and standards. Well-written HTML code is the starting point for the successful operation of web applications on the web. "
		  content.style = "width: 80%"
		  percent.textContent = "80%"

	  } else if (data == "css") {
		  technology.textContent = "CSS"
		  description.textContent = "I use Scss to make the writing code easier to read."
		  content.style = "width: 80%"
		  percent.textContent = "80%"

	  } else if (data == "js") {
		  technology.textContent = "JavaScript"
		  description.textContent = "I use JavaScript version ES6 to ensure proper functionality and transparency of the code"
		  content.style = "width: 70%"
		  percent.textContent = "70%"

	  } else if (data == "react") {
		  technology.textContent = "React"
		  description.textContent = "I use the React framework to make writing code faster and more efficient"
		  content.style = "width: 60%"
		  percent.textContent = "60%"

	  } else if (data == "bootstrap") {
		  technology.textContent = "Bootstrap"
		  description.textContent = "I can also use this Css framework"
		  content.style = "width: 80%"
		  percent.textContent = "80%"

	  } else if (data == "sass") {
		  technology.textContent = "Sass"
		  description.textContent = "Much cooler code writing using the sass processor"
		  content.style = "width: 70%"
		  percent.textContent = "70%"

	  } else if (data == "git") {
		  technology.textContent = "Git i  Github"
		  description.textContent = "A version control system is necessary when working in a larger team. I also keep my projects on Github myself"
		  content.style = "width: 70%"
		  percent.textContent = "70%"

	  } else if (data == "rwd") {
		  technology.textContent = "Responsive Web Design"
		  description.textContent = "Nowadays, you need pages to match the device on which they are displayed."
		  content.style = "width: 80%"
		  percent.textContent = "80%"
	  }
  }))
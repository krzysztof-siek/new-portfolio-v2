const FPS = 10;
const DURATION = 500;
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const TEXT = 'Hire me!';
const DELAY = ~~(500 / FPS);
const FRAME_COUNT = ~~(DURATION / 300) * FPS
const $Element = document.getElementById('animBtn');
const $Element2 = document.getElementById('animBtn2');
let frameIndex = 0;
let timeoutId = undefined;


let buttonId = "";

const resetText = function resetText() {
    let element = document.getElementById(buttonId)
    let width = window.innerWidth;
    if (width >= 768) {
        if (timeoutId !== undefined) clearTimeout(timeoutId);
        frameIndex = 0;
        if(element) {
            element.innerText = TEXT
        } else {
            animateButtons.forEach(el => el.innerText = TEXT)
        }
    }
}

const setRandomText = function setRandomText() {
    let element = document.getElementById(buttonId)
    let width = window.innerWidth;
    if (width >= 768) {
        const text = Array.from({
            length: TEXT.length
        }).map(() => CHARACTERS[~~(Math.random() * CHARACTERS.length)]);
        element.innerText = text.join('')
    }
}

const animate = function animate() {
    let width = window.innerWidth;
    if (width >= 768) {
        if (frameIndex >= FRAME_COUNT) {
            resetText();
        } else {
            frameIndex += 1;
            setRandomText();
            timeoutId = setTimeout(animate, DELAY);
        }
    }
}


const animateButtons = document.querySelectorAll('.animateButton')

startButtonAnimate = (e) => {
    if(e.target.id) {
        buttonId = e.target.id
        animate()
    }
}

animateButtons.forEach(el => el.addEventListener('mouseenter', startButtonAnimate))
animateButtons.forEach(el => el.addEventListener('mouseout', resetText))

resetText();

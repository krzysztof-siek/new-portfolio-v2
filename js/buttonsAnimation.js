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



const resetText = function resetText() {
    let width = window.innerWidth;
    if (width >= 768) {
        if (timeoutId !== undefined) clearTimeout(timeoutId);
        frameIndex = 0;
        element.innerText = TEXT;
        element2.innerText = TEXT;
    }
}

const setRandomText = function setRandomText() {
    let width = window.innerWidth;
    if (width >= 768) {
        const text = Array.from({
            length: TEXT.length
        }).map(() => CHARACTERS[~~(Math.random() * CHARACTERS.length)]);
        element.innerText = text.join('');
        element2.innerText = text.join('');
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

const element = document.getElementById('anim-btn-1');
const element2 = document.getElementById('anim-btn-2');


element.addEventListener('mouseenter', animate);
element.addEventListener('mouseout', resetText);
element2.addEventListener('mouseenter', animate);
element2.addEventListener('mouseout', resetText);


resetText();

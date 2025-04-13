const typewriterElement = document.getElementById('typewriter');
const phrases = [
    "I'm an AI",
    "I can solve your tasks",
    "I'm your assistant",
    "I'm your friend",
    "I may be dumb sometimes",
    "I'm developed by Saheem,Viraj,Shwet,Vedant"
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typewriterElement.textContent = currentPhrase.substring(0, letterIndex);

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && letterIndex === currentPhrase.length) {
        typingSpeed = 1500; // Pause at full word
        isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before next word
    }

    setTimeout(type, typingSpeed);
}

document.addEventListener('DOMContentLoaded', type);


const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");

linkedin.addEventListener("click",()=>{
    window.location.href="https://www.linkedin.com/in/saheem-nakhwa-311234329/";
})

github.addEventListener("click",()=>{
    window.location.href="https://github.com/saheemnoob/";
});

const navRight = document.querySelector(".nav_right");

const menu = document.querySelector(".menu");
const cross = document.querySelector(".hidden");

menu.addEventListener("click", () => {
    navRight.style.right = "0";
    cross.classList.remove("hidden");
});

if (cross) {
    cross.addEventListener("click", () => {
        navRight.style.right = "-2000px";
    })
}
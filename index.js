import { getResistorOhms } from './resistor.js';

let bandContainer = document.querySelector('[data-container]');
let resistorContainer = document.querySelector('[data-resistor]');

bandContainer.addEventListener('click', e => {
    switch (e.target.parentNode.getAttribute('data-band')) {
        case "1":
            resistorContainer.childNodes[1].classList.replace(resistorContainer.childNodes[1].classList[1], e.target.classList[1]);
            break;
        case "2":
            resistorContainer.childNodes[3].classList.replace(resistorContainer.childNodes[3].classList[1], e.target.classList[1]);
            break;
        case "3":
            resistorContainer.childNodes[5].classList.replace(resistorContainer.childNodes[5].classList[1], e.target.classList[1]);
            break;
        case "4":
            resistorContainer.childNodes[7].classList.replace(resistorContainer.childNodes[7].classList[1], e.target.classList[1]);
            break;
    }
})
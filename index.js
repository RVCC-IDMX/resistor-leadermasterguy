/*import { getResistorOhms } from './resistor.js'*/

let bandContainer = document.querySelector('[data-container]');

let displayFirstBandContainer = document.querySelector('[data-display-first-band]');
let displaySecondBandContainer = document.querySelector('[data-display-second-band]');
let displayMultiplierBandContainer = document.querySelector('[data-display-multiplier-band]');
let displayResistanceBandContainer = document.querySelector('[data-display-resistance-band]');

bandContainer.addEventListener('click', e => {
    console.log(e.target.classList[1]);
    switch (e.target.parentNode.getAttribute('data-band')) {
        case "1":
            displayFirstBandContainer.classList.replace(displayFirstBandContainer.classList[1], e.target.classList[1]);
            break;
        case "2":
            displaySecondBandContainer.classList.replace(displaySecondBandContainer.classList[1], e.target.classList[1]);
            break;
        case "3":
            displayMultiplierBandContainer.classList.replace(displayMultiplierBandContainer.classList[1], e.target.classList[1]);
            break;
        case "4":
            displayResistanceBandContainer.classList.replace(displayResistanceBandContainer.classList[1], e.target.classList[1]);
            break;
    }
})
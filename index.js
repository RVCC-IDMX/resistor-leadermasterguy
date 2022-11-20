/*import { getResistorOhms } from './resistor.js'*/

let firstBandContainer = document.querySelector('[data-first-band]');
let displayFirstBandContainer = document.querySelector('[data-display-first-band]');

let secondBandContainer = document.querySelector('[data-second-band]');
let displaySecondBandContainer = document.querySelector('[data-display-second-band]');

let multiplierBandContainer = document.querySelector('[data-multiplier-band]');
let displayMultiplierBandContainer = document.querySelector('[data-display-multiplier-band]');

let resistanceBandContainer = document.querySelector('[data-resistance-band]');
let displayResistanceBandContainer = document.querySelector('[data-display-resistance-band]');

firstBandContainer.addEventListener('click', e => {
    displayFirstBandContainer.classList.replace(displayFirstBandContainer.classList[1], e.target.classList[1]);
})

secondBandContainer.addEventListener('click', e => {
    displaySecondBandContainer.classList.replace(displaySecondBandContainer.classList[1], e.target.classList[1]);
})

multiplierBandContainer.addEventListener('click', e => {
    displayMultiplierBandContainer.classList.replace(displayMultiplierBandContainer.classList[1], e.target.classList[1]);
})

resistanceBandContainer.addEventListener('click', e => {
    displayResistanceBandContainer.classList.replace(displayResistanceBandContainer.classList[1], e.target.classList[1]);
})
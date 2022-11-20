/*import { getResistorOhms } from './resistor.js'*/

let firstBandContainer = document.querySelector('[data-first-band]');
let displayFirstBandContainer = document.querySelector('[data-display-first-band]');

let firstBandColor = 'Black';
let secondBandColor = 'Black';
let multiplierColor = 'Black';
let resistanceColor = 'Black';

firstBandContainer.addEventListener('click', e => {
    displayFirstBandContainer.classList.replace(displayFirstBandContainer.classList[1], e.target.classList[1]);
})
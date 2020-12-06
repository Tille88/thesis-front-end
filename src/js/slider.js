import noUiSlider from "nouislider";
import wNumb from "wnumb";
import {randomInt} from "./math";

var updateSlider = document.querySelector('.range');

const SLIDER_MIN = 0;
const SLIDER_MAX = 100;


noUiSlider.create(updateSlider, {
    range: {
        'min': SLIDER_MIN,
        'max': SLIDER_MAX
    },
    padding: 0,
    start: randomInt(SLIDER_MIN, SLIDER_MAX),
    tooltips: wNumb({decimals: 1}),
    step: 0.1,
    pips: {
        mode: 'positions',
        values: [0, 20, 40, 60, 80, 100],
        density: 5,
    }
});

console.log("FROM SLIDER")

let tooltips = updateSlider.noUiSlider.getTooltips();

updateSlider.noUiSlider.on('update', function (values, handle) {
    // console.log(values);
});
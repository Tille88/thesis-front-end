import noUiSlider from "nouislider";
import wNumb from "wnumb";
import {debounce, update} from "lodash";
import {randomInt} from "./math";
import {cfg} from "./cfg";


const SLIDER_MIN = 0;
const SLIDER_MAX = 100;

export function CreateSlider(eventKeeper = null) {

    var updateSlider = document.querySelector(cfg.sliderTarget);
    let moved = 0;
    let privInputChanged = false;
    init(updateSlider);

    return {
        value: null,
        elem: function(){
            return updateSlider;
        },
        initListeners: function(){
            let that = this;
            const debouncedUpdate = debounce(function (value) {
                if(moved){
                    that.value = value[0];
                    const event = new Event('change');
                    updateSlider.dispatchEvent(event);
                }
                moved++;
            }, 100);

            updateSlider.noUiSlider.on('update', debouncedUpdate);

            this.elem().addEventListener('change', function(e) { 
                if(!privInputChanged){
                    let nextButton = document.querySelector(".next");
                    nextButton.classList.remove("inactive");
                    nextButton.classList.add("active");
                    privInputChanged = true;
                }
                // console.log("Value change: ", that.value, " Time: ", timer.now()/1000);
                eventKeeper.logSliderEvent(that.value);
            }, false);
            return this;
        },
        reset: function(){
            updateSlider.noUiSlider.set(randomInt(SLIDER_MIN, SLIDER_MAX));
            moved = 0;
        },
        inputChanged: function(){
            return privInputChanged;
        },
        resetInputChanged: function(){
            privInputChanged = false;
        }
    }
}


function init(sliderTarget){

    noUiSlider.create(sliderTarget, {
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

    let tooltips = sliderTarget.noUiSlider.getTooltips();
}





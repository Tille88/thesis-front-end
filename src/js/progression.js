import {throttle} from "lodash";
import "../style/page-progression.scss";
import "./slider";
import {CreateTimer} from "./timer";
import {CreateSlider} from "./slider";
import {ClientStorage} from "./clientstorage";
import {cfg} from "./cfg";

let inputChanged = false;

// Slider
const slider = CreateSlider();
slider.initListeners();
slider.elem().addEventListener('change', function(e) { 
    if(!inputChanged){
        let nextButton = document.querySelector(".next");
        nextButton.classList.remove("inactive");
        nextButton.classList.add("active");
        inputChanged = true;
    }
    console.log("Value change: ", slider.value, " Time: ", timer.now()/1000);
}, false);

// Button
document.querySelector(".next").addEventListener("click", onSubmit);

// Timer
const timer = CreateTimer();
loadImage(ClientStorage().getCurrImg(), function(){
    timer.restart();
    console.log("Image loaded time-reset: ", timer.now()/1000);
});

let throttledMouseEvent = throttle(function(e){
    console.log("At time: ", timer.now()/1000);
    console.log("X: ", e.clientX / (e.target.width -e.target.clientLeft));
    console.log("Y: ", e.clientY / (e.target.height -e.target.clientTop));    
}, 1000);

// Map
document.querySelector(".map").addEventListener("mousemove", throttledMouseEvent);

function onSubmit(el){
    if(inputChanged){
        console.log("Submit at: ", timer.now()/1000);
        el.target.classList.add("inactive");
        el.target.classList.remove("active");
        slider.reset();
        loadImage(null, function(){
            timer.restart();
            console.log("Image loaded time: ", timer.now()/1000);
        });
    }
    inputChanged = false;
}


function loadImage(startImage = null, cb){
    const mapTarget = document.querySelector(cfg.mapTarget);
    if(mapTarget.childElementCount){
        mapTarget.removeChild(mapTarget.firstChild);
    }
    var img = new Image();
    img.onload = function() {
        cb();
    }
    img.src = startImage || ClientStorage().nextImage() || (window.location.href = "./useraccept.html");
    mapTarget.append(img);
}
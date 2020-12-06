import {throttle} from "lodash";
import "../style/page-progression.scss";
import "./slider";
import {CreateTimer} from "./timer";
import {CreateSlider} from "./slider";
import {cfg} from "./cfg";

let inputChanged = false;
let progIdx = 0;

const slider = CreateSlider();
slider.initListeners();
slider.elem().addEventListener('change', function(e) { 
    if(!inputChanged){
        document.querySelector(".next").classList.remove("inactive");
        inputChanged = true;
    }
    console.log("Value change: ", slider.value, " Time: ", timer.now()/1000);
}, false);

document.querySelector(".next").addEventListener("click", onSubmit);

const timer = CreateTimer();
loadImage(function(){
    timer.restart();
    console.log("Image loaded time-reset: ", timer.now()/1000);
});

let throttledMouseEvent = throttle(function(e){
    console.log("At time: ", timer.now()/1000);
    console.log("X: ", e.clientX / (e.target.width -e.target.clientLeft));
    console.log("Y: ", e.clientY / (e.target.height -e.target.clientTop));    
}, 1000);

document.querySelector(".map").addEventListener("mousemove", throttledMouseEvent);

function onSubmit(el){
    if(inputChanged){
        console.log("Submit at: ", timer.now()/1000);
        el.target.classList.add("inactive");
        slider.reset();
        loadImage(function(){
            timer.restart();
            console.log("Image loaded time: ", timer.now()/1000);
        });
    }
    inputChanged = false;
}


function loadImage(cb){
    const mapTarget = document.querySelector(cfg.mapTarget);
    if(mapTarget.childElementCount){
        mapTarget.removeChild(mapTarget.firstChild);
    }
    var img = new Image();
    img.onload = function() {
        cb();
    }
    img.src = cfg.hardCodedProg[progIdx++];
    mapTarget.append(img);
}
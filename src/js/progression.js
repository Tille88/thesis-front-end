import {throttle} from "lodash";
import "../style/page-progression.scss";
import "./slider";
import {CreateTimer} from "./timer";
import {CreateSlider} from "./slider";
import {ClientStorage} from "./clientstorage";
import {cfg} from "./cfg";

// Timer
const timer = CreateTimer();

// Slider
const slider = CreateSlider(timer);
slider.initListeners();


// Load first image or if reloaded old image
loadImage(ClientStorage().getCurrImg(), function(){
    timer.restart();
});

let throttledMouseEvent = throttle(function(e){
    console.log("At time: ", timer.now()/1000);
    console.log("X: ", e.clientX / (e.target.width -e.target.clientLeft));
    console.log("Y: ", e.clientY / (e.target.height -e.target.clientTop));    
}, 250);

// Map
document.querySelector(".map").addEventListener("mousemove", throttledMouseEvent);


// Button
document.querySelector(".next").addEventListener("click", onSubmit);



function onSubmit(el){
    if(slider.inputChanged()){
        // TODO: AJAX LOG INFO TO BACKEND (image, timer info), include image dimensions -> THEN!!!
        console.log("Submit at: ", timer.now()/1000);
        el.target.classList.add("inactive");
        el.target.classList.remove("active");
        slider.reset();
        loadImage(null, function(){
            timer.restart();
        });
    }
    slider.resetInputChanged();
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
    const imgSrc = startImage || ClientStorage().nextImage();
    if(imgSrc){
        img.src = imgSrc;
    } else{
        window.location.href = "./useraccept.html";
    }
    mapTarget.append(img);
}
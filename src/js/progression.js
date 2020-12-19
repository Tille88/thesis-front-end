import {throttle} from "lodash";
import "../style/page-progression.scss";
import "./slider";
// import {CreateTimer} from "./timer";
import {CreateEventKeeper} from "./eventkeeper";
import {CreateSlider} from "./slider";
import {ClientStorage} from "./clientstorage";
import {cfg} from "./cfg";

////////////////////////////////////////
// EventKeeper
////////////////////////////////////////
const eventKeeper = CreateEventKeeper();

////////////////////////////////////////
// Slider
////////////////////////////////////////
const slider = CreateSlider(eventKeeper);
slider.initListeners();

////////////////////////////////////////
// Map and events
////////////////////////////////////////
// Map
document.querySelector(".map").addEventListener("mousemove", throttledMouseEvent);

let throttledMouseEvent = throttle(function(e){
    eventKeeper.logMapHover(
        e.clientX / (e.target.width -e.target.clientLeft),
        e.clientY / (e.target.height -e.target.clientTop)
    );
}, 250);


// Load first image or if reloaded old image
loadImage(ClientStorage().getCurrImg(), function(){
    eventKeeper.reset();
});


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


////////////////////////////////////////
// Submit functionality and logic
////////////////////////////////////////

// Button
document.querySelector(".next").addEventListener("click", onSubmit);

function onSubmit(el){
    if(slider.inputChanged()){
        eventKeeper.logSubmit();
        // TODO: AJAX LOG INFO TO BACKEND (image, timer info), include image dimensions -> THEN!!!
        // TEMP
        console.log(eventKeeper.asJSON());
        el.target.classList.add("inactive");
        el.target.classList.remove("active");
        slider.reset();
        loadImage(null, function(){
            eventKeeper.reset();
        });
    }
    slider.resetInputChanged();
}



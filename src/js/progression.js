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
let throttledMouseEvent = throttle(function(e){
    if(e.target.width && e.target.height){
        eventKeeper.logMapHover(
            e.clientX / (e.target.width -e.target.clientLeft),
            e.clientY / (e.target.height -e.target.clientTop)
        );
    }
}, 250);

document.querySelector(".map").addEventListener("mousemove", throttledMouseEvent);



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

        fetch(
            `${cfg.fetchBaseURL}${cfg.responseExtension}`,
            {
                method: "POST",
                body: JSON.stringify(
                    Object.assign({ 
                            uuid: ClientStorage().UUID(), 
                            mapVersion: ClientStorage().getCurrImg()
                        }, eventKeeper.getEvents()
                    )
                ), 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                } 
        }).then(_ => {
            el.target.classList.add("inactive");
            el.target.classList.remove("active");
            slider.reset();
            loadImage(null, function(){
                eventKeeper.reset();
            });
            slider.resetInputChanged();
        });

    }
}



import "./style/page-intro.scss";
import {initScrollEvents} from "./js/scrollEvents";
import {CreateSlider} from "./js/slider";
import {ClientStorage} from "./js/clientstorage";

// Warning if too small screen
if(window.innerWidth<980){
    const el = document.querySelector(".size-warning");
    el.classList.add("warn");
}

/////////////////////////////////////////////////
// Slider
/////////////////////////////////////////////////
var updateSlider = document.querySelector('.range');
updateSlider.classList.add("inactive");
CreateSlider();

/////////////////////////////////////////////////
// Scroll-events
/////////////////////////////////////////////////
initScrollEvents()


/////////////////////////////////////////////////
// Next
/////////////////////////////////////////////////
const nextButton = document.querySelector("#start-button");
nextButton.addEventListener("click", function(e){
    startSession();
    // redirect
    window.location.href = "./progression.html";
});

function startSession(){
    ClientStorage().UUID();
    // genereate progression
    ClientStorage().initImageProgression();
    // TODO: AJAX send UUID + progression to backend -> THEN REDIRECT
}
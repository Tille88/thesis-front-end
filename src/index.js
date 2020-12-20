import "./style/page-intro.scss";
import {initScrollEvents} from "./js/scrollEvents";
import {CreateSlider} from "./js/slider";
import {ClientStorage} from "./js/clientstorage";
import {cfg} from "./js/cfg";

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
});

function startSession(){
    // fetch TODO: not arrow-function
    fetch(
        `${cfg.fetchBaseURL}${cfg.sessionInitExtension}`,
        {
            method: "POST"
        }).then(r => r.json())
    .then(json => {
        ClientStorage().UUID(json.data.data.uuid);
        // TODO: get image prog
        ClientStorage().initImageProgression();
        window.location.href = "./progression.html";
    });
}
import "./style/page-intro.scss";
import "./js/slider";
import ScrollMagic from "scrollmagic";
import addIndicators from "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";


if(window.innerWidth<980){
    const el = document.querySelector(".size-warning");
    el.classList.add("warn");
}

/////////////////////////////////////////////////
// Slider
/////////////////////////////////////////////////
var updateSlider = document.querySelector('.range');
updateSlider.classList.add("inactive");

// noUiSlider.create(updateSlider, {
//     range: {
//         'min': 0,
//         'max': 100
//     },
//     padding: 0,
//     start: 20,
//     tooltips: wNumb({decimals: 1}),
//     step: 0.1,
//     pips: {
//         mode: 'positions',
//         values: [0, 20, 40, 60, 80, 100],
//         density: 5,
//     }
// });


// let tooltips = updateSlider.noUiSlider.getTooltips();

// updateSlider.noUiSlider.on('update', function (values, handle) {
//     console.log(values);
// });


/////////////////////////////////////////////////
// Scroll-events
/////////////////////////////////////////////////

// init controller
var controller = new ScrollMagic.Controller();

// Tilt throughout
new ScrollMagic.Scene({
    triggerElement: "#tilt",
    duration: "200%"
    }).setClassToggle(".tiltable", "tilt")
    // .addIndicators() 
    .addTo(controller);

// Basemap highlight
new ScrollMagic.Scene({
        triggerElement: "#basemap",
        duration: 100
    })
    .setClassToggle("#base-layer-img, #basemap>h3", "active")
    // .addIndicators() 
    .addTo(controller);

// Datalayer highlight + Lift
new ScrollMagic.Scene({
        triggerElement: "#datalayer",
        duration: "100%"
    })
    .setClassToggle("#data-layer-img", "lift-base")
    // .addIndicators() 
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#datalayer",
        duration: 100
    })
    .setClassToggle("#data-layer-img, #datalayer>h3", "active")
    // .addIndicators() 
    .addTo(controller);

// Legends highlight + Lift
new ScrollMagic.Scene({
    triggerElement: "#legends",
    duration: 100
    }).setClassToggle(".legend, #legends>h3", "active")
    // .addIndicators() 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#legends",
    duration: "100%"
    }).setClassToggle("#legend-headline", "lift-base")
    // .addIndicators() 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#legends",
    duration: "100%"
    }).setClassToggle("#legend-checkered", "lift-base")
    // .addIndicators() 
    .addTo(controller);

    new ScrollMagic.Scene({
    triggerElement: "#legends",
    duration: "100%"
    }).setClassToggle("#legend-sampled", "lift-legend-sampled")
    // .addIndicators() 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#legends",
    duration: "100%"
    }).setClassToggle("#legend-cluster", "lift-legend-cluster")
    // .addIndicators() 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#legends",
    duration: "100%"
    }).setClassToggle("#legend-annotated", "lift-legend-annotated")
    // .addIndicators() 
    .addTo(controller);

// Marker highlight + Lift
new ScrollMagic.Scene({
    triggerElement: "#marker",
    duration: 100
    }).setClassToggle("#marker-img, #marker>h3", "active")
    // .addIndicators() 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#marker",
    duration: 100
    }).setClassToggle("#marker-img", "lift-marker")
    // .addIndicators() 
    .addTo(controller);

// Selection slider
new ScrollMagic.Scene({
    triggerElement: "#slider",
    duration: 400
    }).setClassToggle(".range, #slider>h3", "active")
    // .addIndicators() 
    .addTo(controller);

// Progress indicator
new ScrollMagic.Scene({
    triggerElement: "#progress",
    duration: 100
    }).setClassToggle(".progress, #progress>h3", "active")
    // .addIndicators() 
    .addTo(controller);

// Next
new ScrollMagic.Scene({
    triggerElement: "#next",
    duration: 100
    }).setClassToggle(".next, #next>h3", "active")
    // .addIndicators() 
    .addTo(controller);


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
    // TEMP UUID
    localStorage.setItem('uuid', 'xxx-xxx-xxx');
    // genereate progression
}
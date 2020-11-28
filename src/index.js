import "./styles.scss";
import ScrollMagic from "scrollmagic";
import addIndicators from "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"

// init controller
var controller = new ScrollMagic.Controller();

// build scenes
new ScrollMagic.Scene({
    triggerElement: "#tilt",
    duration: "100%"
    }).setClassToggle(".tiltable", "tilt")
    .addIndicators() 
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#basemap",
        duration: 100
    })
    .setClassToggle("#base-layer-img, #basemap>h3", "active")
    .addIndicators() 
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#datalayer",
        duration: "100%"
    })
    .setClassToggle("#data-layer-img", "lift-data")
    .addIndicators() 
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#datalayer",
        duration: 100
    })
    .setClassToggle("#data-layer-img, #datalayer>h3", "active")
    .addIndicators() 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#legends",
    duration: "100%"
    }).setClassToggle("#legend-headline", "lift-legend-headline")
    .addIndicators() 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#legends",
    duration: "100%"
    }).setClassToggle("#legend-checkered", "lift-legend-checkered")
    .addIndicators() 
    .addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#legends",
    duration: 100
}).setClassToggle("#legend-headline", "active")
    .addIndicators() 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#marker",
    duration: 100
    }).setClassToggle("#marker", "active")
    .addIndicators() 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#slider",
    duration: 100
    }).setClassToggle(".progress", "active")
    .addIndicators() 
    .addTo(controller);

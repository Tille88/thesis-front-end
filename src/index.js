import "./styles.scss";
import ScrollMagic from "scrollmagic";
import addIndicators from "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"

// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});

// build scenes
new ScrollMagic.Scene({triggerElement: "#pivot"})
                .setClassToggle("#pivot", "active")
                .addIndicators() 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#basemap"})
                .setClassToggle("#basemap", "active")
                .addIndicators() 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#datalayer"})
                .setClassToggle("#datalayer", "active")
                .addIndicators() 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#legends"})
                .setClassToggle("#legends", "active")
                .addIndicators() 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#marker"})
                .setClassToggle("#marker", "active")
                .addIndicators() 
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#slider"})
                .setClassToggle(".progress", "active")
                .addIndicators() 
                .addTo(controller);

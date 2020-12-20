import {CreateTimer} from "./timer";

export function CreateEventKeeper() {
    const timer = CreateTimer();
    let eventContainer = resetEventContainer();

    return {
        reset: function(){
            timer.restart();
            eventContainer = resetEventContainer();
        },
        logSliderEvent: function(val){
            eventContainer.sliderChanges.push({
                "timestamp": timer.now(),
                "val": val
            });
        },
        logMapHover: function(xLoc, yLoc){
            eventContainer.imageHoverEvents.push({
                "timestamp": timer.now(),
                "x": xLoc,
                "y": yLoc
            });
        },
        logSubmit: function(){
            eventContainer.submitTime = timer.now();
        },
        asJSON: function(){
            return JSON.stringify(eventContainer, false, 2);
        },
        getEvents: function(){
            return eventContainer;
        }
    }
}

function resetEventContainer(){
    return {
        sliderChanges: [],
        imageHoverEvents: [],
        submitTime: null
    };
}
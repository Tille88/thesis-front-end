var clockNow = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;


export function CreateTimer() {
    let start = clock.now();
    return {
        now: function(){
            return clock.now() - start;
        },
        restart: function() {
            start = clock.now();
        }
    }
}


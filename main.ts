/*
PXT Interval
"interval": "file:../pxt-interval"
*/

//% color="#00bbff" weight=10 icon="\uf1b9"
namespace interval {

    const myTimerID = 200;
    const timerTimeout = 1;
    
    let onIntervalHandler: () => void;

    // Internal function to respond to event ID
    control.onEvent(myTimerID, 0, function () {
        control.inBackground(() => {
            onIntervalHandler()
        })
    })

    /**
    * Trigger the execution
    */
    //% weight=30
    //% blockId="interval_onInterval" block="Execute every|interval %interval in ms"
    //% interval.defl=1000
    //% interval.min=1
    export function OnInterval(interval: number, cb: () => void) {
        onIntervalHandler = cb;

        control.inBackground(() => {
            while (true) {
                basic.pause(interval);
                control.raiseEvent(myTimerID, timerTimeout);
            }
        })
    }
}
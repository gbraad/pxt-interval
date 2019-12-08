/*
PXT Interval
"interval": "file:../pxt-interval"
*/

//% color="#00bbff" weight=10 icon="\uf1b9"
namespace interval {
    /**
    * Trigger the execution
    */
    //% weight=30
    //% blockId="interval_onInterval" block="Execute every|interval %interval in ms"
    //% interval.defl=1000
    //% interval.min=1
    export function OnInterval(interval: number, cb: () => void) {
        const myTimerID = 200 + Math.randomRange(0, 100); // semi-unique
        const timerTimeout = 1;

        control.onEvent(myTimerID, 0, function () {
            control.inBackground(() => {
                cb()
            })
        })

        control.inBackground(() => {
            while (true) {
                basic.pause(interval);
                control.raiseEvent(myTimerID, timerTimeout);
            }
        })
    }
}
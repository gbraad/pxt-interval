/*
PXT Interval
"interval": "file:../pxt-interval"
*/

//% color="#00bbff" weight=10 icon="\uf1b9"
namespace interval {

    const myTimerID = 200;
    const timerTimeout = 1;
    

    control.onEvent(myTimerID, 0, function () {
        basic.showNumber(0)
    })

    /**
    * Trigger the execution
    */
    //% weight=30 blockId="interval_onInterval" block="Execute codeblock on interval in ms"
    export function OnInterval(interval: number, cb: () => void) {
        //cb
        control.inBackground(() => {
            while (true) {
                basic.pause(interval);
                control.raiseEvent(myTimerID, timerTimeout);
            }
        })
    }

}
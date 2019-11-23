/*
PXT Interval
"interval": "file:../pxt-interval"
*/

//% color="#00bbff" weight=10 icon="\uf1b9"
namespace interval {

    let onIntervalHandler: () => void;

    /**
    * Trigger the execution
    */
    //% weight=30 blockId="interval_onInterval" block="Execute codeblock on interval"
    export function OnInterval(interval: number, cb: () => void) {
        onInterval(interval, cb)
    }


    //% shim=interval::onInterval
    function onInterval(interval: number, cb: () => void) {
        return;
    }

}